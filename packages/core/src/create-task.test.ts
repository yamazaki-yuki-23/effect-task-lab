import { Effect, Either } from "effect";
import { describe, expect, it } from "vitest";
import { createTask } from "./create-task";
import { InvalidTaskTitleError } from "./task-error";

describe("createTask", () => {
  it("creates an open task with the given title", async () => {
    const task = await Effect.runPromise(createTask("Learn Effect-TS"));

    expect(task.title).toBe("Learn Effect-TS");
    expect(task.status).toBe("open");
    expect(typeof task.id).toBe("string");
  });

  it("fails when the title is blank", async () => {
    const result = await Effect.runPromise(Effect.either(createTask("   ")));

    expect(Either.isLeft(result)).toBe(true);

    if (Either.isLeft(result)) {
      expect(result.left).toBeInstanceOf(InvalidTaskTitleError);
    }
  });
});
