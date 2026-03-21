import { Effect } from "effect";
import type { Task } from "./task";

export const createTask = (title: string): Effect.Effect<Task> =>
  Effect.succeed({
    id: crypto.randomUUID(),
    title,
    status: "open",
  });
