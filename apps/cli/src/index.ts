import { createTask, listTasks } from "@effect-task-lab/core";
import { Effect } from "effect";

const program = Effect.gen(function* () {
  const firstTask = yield* createTask("Learn Effect-TS");
  const secondTask = yield* createTask("Build a CLI app");

  return yield* listTasks([firstTask, secondTask]);
});

const tasks = await Effect.runPromise(program);

console.log(tasks);
