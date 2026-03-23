import {
  completeTask,
  createTask,
  listTasks,
  TaskNotFoundError,
} from "@effect-task-lab/core";
import { Effect, Either } from "effect";

const program = Effect.gen(function* () {
  const firstTask = yield* createTask("Learn Effect-TS");
  const secondTask = yield* createTask("Build a CLI app");

  return yield* Effect.either(
    completeTask([firstTask, secondTask], "task-999"),
  );
});

const result = await Effect.runPromise(program);

if (Either.isLeft(result)) {
  if (result.left instanceof TaskNotFoundError) {
    console.error(`Task not found: ${result.left.taskId}`);
  }
} else {
  const tasks = await Effect.runPromise(listTasks(result.right));
  console.log(tasks);
}
