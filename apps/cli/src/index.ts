import {
  completeTask,
  createTask,
  InvalidTaskTitleError,
  TaskNotFoundError,
} from "@effect-task-lab/core";
import { Effect, Either } from "effect";

const program = Effect.gen(function* () {
  const firstTask = yield* createTask("Learn Effect-TS");
  const secondTask = yield* createTask("Build a CLI app");

  return yield* completeTask([firstTask, secondTask], "task-999");
});

const result = await Effect.runPromise(Effect.either(program));

if (Either.isLeft(result)) {
  if (result.left instanceof InvalidTaskTitleError) {
    console.error("Task title must not be blank");
  } else if (result.left instanceof TaskNotFoundError) {
    console.error(`Task not found: ${result.left.taskId}`);
  }
} else {
  console.log(result.right);
}
