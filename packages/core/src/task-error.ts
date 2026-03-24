import type { TaskId } from "./task";

export class TaskNotFoundError {
  readonly _tag = "TaskNotFoundError";

  constructor(readonly taskId: TaskId) {}
}

export class InvalidTaskTitleError {
  readonly _tag = "InvalidTaskTitleError";
}
