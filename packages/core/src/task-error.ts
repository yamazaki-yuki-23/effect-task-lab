import type { TaskId } from "./task";

export class TaskNotFoundError {
  readonly _tag = "TaskNotFoundError";

  constructor(readonly taskId: TaskId) {}
}
