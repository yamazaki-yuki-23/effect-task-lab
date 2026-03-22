import { Effect } from "effect";
import type { Task, TaskId } from "./task";
import { TaskNotFoundError } from "./task-error";

export const completeTask = (
  tasks: ReadonlyArray<Task>,
  taskId: TaskId,
): Effect.Effect<ReadonlyArray<Task>, TaskNotFoundError> => {
  const hasTask = tasks.some((task) => task.id === taskId);

  if (!hasTask) {
    return Effect.fail(new TaskNotFoundError(taskId));
  }

  return Effect.succeed(
    tasks.map((task) =>
      task.id === taskId
        ? {
            ...task,
            status: "done",
          }
        : task,
    ),
  );
};
