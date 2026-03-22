import { createTask, listTasks } from "@effect-task-lab/core";
import { Effect } from "effect";

const firstTask = await Effect.runPromise(createTask("Learn Effect-TS"));
const secondTask = await Effect.runPromise(createTask("Build a CLI app"));

const tasks = await Effect.runPromise(listTasks([firstTask, secondTask]));

console.log(tasks);
