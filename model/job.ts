interface Job {
  id: string;
  name: string;
  state: string;
  createdAt: string;
  startedAt: string;
  completedAt: string;
  failedAt: string;
  execution: Task[];
  tasks: Task[];
  position: number;
  taskCount: number;
}
