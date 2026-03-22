import { Effect, Either } from "effect";
import { describe, expect, it } from "vitest";
import { completeTask } from "./complete-task";
import type { Task } from "./task";
import { TaskNotFoundError } from "./task-error";

describe("completeTask", () => {
  it("marks the matching task as done", async () => {
    const tasks: ReadonlyArray<Task> = [
      {
        id: "task-1",
        title: "Learn Effect-TS",
        status: "open",
      },
      {
        id: "task-2",
        title: "Build a CLI app",
        status: "open",
      },
    ];

    const result = await Effect.runPromise(completeTask(tasks, "task-2"));

    expect(result).toEqual([
      {
        id: "task-1",
        title: "Learn Effect-TS",
        status: "open",
      },
      {
        id: "task-2",
        title: "Build a CLI app",
        status: "done",
      },
    ]);
  });

  it("fails when the task does not exist", async () => {
    const tasks: ReadonlyArray<Task> = [
      {
        id: "task-1",
        title: "Learn Effect-TS",
        status: "open",
      },
    ];

    const result = await Effect.runPromise(
      Effect.either(completeTask(tasks, "task-999")),
    );

    expect(Either.isLeft(result)).toBe(true);

    if (Either.isLeft(result)) {
      expect(result.left).toBeInstanceOf(TaskNotFoundError);
      expect(result.left.taskId).toBe("task-999");
    }
  });
});
