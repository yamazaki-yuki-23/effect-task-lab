import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { createTask } from "./create-task";

describe("createTask", () => {
  it("creates an open task with the given title", async () => {
    const task = await Effect.runPromise(createTask("Learn Effect-TS"));

    expect(task.title).toBe("Learn Effect-TS");
    expect(task.status).toBe("open");
    expect(typeof task.id).toBe("string");
  });
});
