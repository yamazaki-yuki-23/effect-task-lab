import { Effect } from "effect";
import type { Task } from "./task";
import { InvalidTaskTitleError } from "./task-error";

export const createTask = (
  title: string,
): Effect.Effect<Task, InvalidTaskTitleError> => {
  const normalizedTitle = title.trim();

  if (normalizedTitle.length === 0) {
    return Effect.fail(new InvalidTaskTitleError());
  }

  return Effect.succeed({
    id: crypto.randomUUID(),
    title: normalizedTitle,
    status: "open",
  });
};
