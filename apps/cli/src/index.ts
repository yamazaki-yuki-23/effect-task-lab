import { createTask, InvalidTaskTitleError } from "@effect-task-lab/core";
import { Effect, Either } from "effect";

const getCliArgs = (argv: ReadonlyArray<string>): ReadonlyArray<string> => {
  const args = argv.slice(2);

  return args[0] === "--" ? args.slice(1) : args;
};

const [command, ...rest] = getCliArgs(process.argv);
const title = rest.join(" ").trim();

if (command !== "create" || title.length === 0) {
  console.error('Usage: pnpm dev:cli -- create "Task title"');
  process.exit(1);
}

const result = await Effect.runPromise(Effect.either(createTask(title)));

if (Either.isLeft(result)) {
  if (result.left instanceof InvalidTaskTitleError) {
    console.error("Task title must not be blank");
    process.exit(1);
  }
} else {
  console.log(result.right);
}
