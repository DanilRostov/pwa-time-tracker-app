export interface Task {
  id: string;
  isPlanned: boolean;
  isDone: boolean;
  title: string;
  prefix: string;
  estimation: number;
}