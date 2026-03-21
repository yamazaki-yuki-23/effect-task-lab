export type TaskId = string;

export type TaskStatus = "open" | "done";

export type Task = {
  id: TaskId;
  title: string;
  status: TaskStatus;
};
