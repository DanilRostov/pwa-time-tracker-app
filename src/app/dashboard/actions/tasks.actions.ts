import { Action } from '@ngrx/store';
import { 
  Task, 
  CreateTaskData,
} from '../models/tasks';

export const LOAD_TASKS = '[Tasks] Load tasks';
export const LOAD_TASKS_COMPLETE = '[Tasks] Load tasks complete';
export const LOAD_TASKS_FAILURE = '[Tasks] Load tasks failure';

export const CREATE_TASK = '[Tasks] Create task';
export const CREATE_TASK_COMPLETE = '[Tasks] Create task complete';
export const CREATE_TASK_FAILURE = '[Tasks] Create task failure';

export const DELETE_TASK = '[Tasks] Delete task';
export const DELETE_TASK_COMPLETE = '[Tasks] Delete task complete';
export const DELETE_TASK_FAILURE = '[Tasks] Delete task failure';

export const UPDATE_TASK = '[Tasks] Update task status';
export const UPDATE_TASK_COMPLETE = '[Tasks] Update task complete';
export const UPDATE_TASK_FAILURE = '[Tasks] Update task failure';


export class LoadTasks implements Action {
  public readonly type = LOAD_TASKS;
}

export class LoadTasksComplete implements Action {
  public readonly type = LOAD_TASKS_COMPLETE;
  constructor(public payload: Task[]) {}
}

export class LoadTasksFailure implements Action {
  public readonly type = LOAD_TASKS_FAILURE;
  constructor(public payload: string) {}
}

export class CreateTask implements Action {
  public readonly type = CREATE_TASK;
  constructor(public payload: { dayId: string, task: CreateTaskData }) {}
}

export class CreateTaskComplete implements Action {
  public readonly type = CREATE_TASK_COMPLETE;
  constructor(public payload: Task) {}
}

export class CreateTaskFailure implements Action {
  public readonly type = CREATE_TASK_FAILURE;
  constructor(public payload: string) {}
}

export class DeleteTask implements Action {
  public readonly type = DELETE_TASK;
  constructor(public payload: { dayId: string, id: string }) {}
}

export class DeleteTaskComplete implements Action {
  public readonly type = DELETE_TASK_COMPLETE;
  constructor(public payload: string) {}
}

export class DeleteTaskFailure implements Action {
  public readonly type = DELETE_TASK_FAILURE;
  constructor(public payload: string) {}
}

export class UpdateTask implements Action {
  public readonly type = UPDATE_TASK;
  constructor(public payload: Task) {}
}

export class UpdateTaskComplete implements Action {
  public readonly type = UPDATE_TASK_COMPLETE;
  constructor(public payload: Task) {}
}

export class UpdateTaskFailure implements Action {
  public readonly type = UPDATE_TASK_FAILURE;
  constructor(public payload: string) {}
}

export type TasksActions =
  | LoadTasks
  | LoadTasksComplete
  | LoadTasksFailure
  | CreateTask
  | CreateTaskComplete
  | CreateTaskFailure
  | DeleteTask
  | DeleteTaskComplete
  | DeleteTaskFailure
  | UpdateTask
  | UpdateTaskComplete
  | UpdateTaskFailure;