import { TYPES } from '../consts/tasks';

export interface Task {
  dayId: string;
  id: string;
  isPlanned: boolean;
  isDone: boolean;
  title: string;
  prefix: string;
  estimation: number;
}

export interface CreateTaskData {
  title: string;
  prefix: string;
  estimation: number;
}

export interface DoneData { 
  id: string;
  isDone: boolean;
}

export interface TaskStats {
  [TYPES.notPlannedAndDone]: {
    count: number;
    estimation: number;
  };
  [TYPES.plannedAndDone]: {
    count: number;
    estimation: number;
  };
  [TYPES.planned]: {
    count: number;
    estimation: number;
  };
}