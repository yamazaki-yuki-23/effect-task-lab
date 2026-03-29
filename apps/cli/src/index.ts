import {
  createTask,
  InvalidTaskTitleError,
  TaskNotFoundError,
} from "@effect-task-lab/core";
import { Effect, Either } from "effect";

type ParsedCommand = { _tag: "Create"; title: string } | { _tag: "UsageError" };

const getCliArgs = (argv: ReadonlyArray<string>): ReadonlyArray<string> => {
  const args = argv.slice(2);

  return args[0] === "--" ? args.slice(1) : args;
};

const parseCommand = (args: ReadonlyArray<string>): ParsedCommand => {
  const [command, ...rest] = args;
  const title = rest.join(" ").trim();

  if (command !== "create" || title.length === 0) {
    return { _tag: "UsageError" };
  }

  return {
    _tag: "Create",
    title,
  };
};

const runCreateCommand = (title: string) => createTask(title);

const renderError = (
  error: ParsedCommand | InvalidTaskTitleError | TaskNotFoundError,
): string => {
  if ("_tag" in error && error._tag === "UsageError") {
    return 'Usage: pnpm dev:cli -- create "Task title"';
  }

  if (error instanceof InvalidTaskTitleError) {
    return "Task title must not be blank";
  }

  if (error instanceof TaskNotFoundError) {
    return `Task not found: ${error.taskId}`;
  }

  return "Unknown error";
};

const parsed = parseCommand(getCliArgs(process.argv));

if (parsed._tag === "UsageError") {
  console.error(renderError(parsed));
  process.exit(1);
}

const result = await Effect.runPromise(
  Effect.either(runCreateCommand(parsed.title)),
);

if (Either.isLeft(result)) {
  console.error(renderError(result.left));
  process.exit(1);
}

console.log(result.right);
