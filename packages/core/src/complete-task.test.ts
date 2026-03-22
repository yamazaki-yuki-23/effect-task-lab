import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { completeTask } from "./complete-task";
import type { Task } from "./task";

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
});
