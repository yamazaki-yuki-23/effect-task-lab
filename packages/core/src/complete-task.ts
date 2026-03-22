import { Effect } from "effect";
import type { Task, TaskId } from "./task";

export const completeTask = (
  tasks: ReadonlyArray<Task>,
  taskId: TaskId,
): Effect.Effect<ReadonlyArray<Task>> =>
  Effect.succeed(
    tasks.map((task) =>
      task.id === taskId
        ? {
            ...task,
            status: "done",
          }
        : task,
    ),
  );
