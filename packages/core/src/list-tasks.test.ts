import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { listTasks } from "./list-tasks";
import type { Task } from "./task";

describe("listTasks", () => {
  it("returns the provided tasks", async () => {
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

    const result = await Effect.runPromise(listTasks(tasks));

    expect(result).toEqual(tasks);
  });
});
