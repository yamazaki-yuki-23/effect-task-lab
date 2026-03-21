import { createTask } from "@effect-task-lab/core";
import { Effect } from "effect";

const task = await Effect.runPromise(createTask("Learn Effect-TS"));

console.log(task);
