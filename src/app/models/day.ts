import { Task } from './tasks';

export interface Day {
  id?: string;
  date: Date;
  tasks?: Task[];
}