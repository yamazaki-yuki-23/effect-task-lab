import { Effect } from "effect";
import type { Task } from "./task";

export const listTasks = (
  tasks: ReadonlyArray<Task>,
): Effect.Effect<ReadonlyArray<Task>> => Effect.succeed(tasks);
