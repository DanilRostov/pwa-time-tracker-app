import { Injectable } from '@angular/core';
import {
  Actions,
  Effect,
  ofType,
} from '@ngrx/effects';
import {
  switchMap, 
  map, 
  catchError,
} from 'rxjs/operators';
import { 
  Observable, 
  of,
} from 'rxjs';
import { 
  TasksActions, 
  LOAD_TASKS, 
  LoadTasksComplete, 
  LoadTasksFailure,
  CREATE_TASK,
  CreateTaskComplete,
  CreateTaskFailure,
  CreateTask,
  UPDATE_TASK,
  UpdateTask,
  UpdateTaskComplete,
  UpdateTaskFailure,
  DeleteTask,
  DELETE_TASK,
  DeleteTaskComplete,
  DeleteTaskFailure,
} from '../actions/tasks.actions';
import { TaskService } from '../services/task.service';
import { Task } from '../models/tasks';

@Injectable()
export class TasksEffects {

  @Effect()
  public loadTasks: Observable<TasksActions> = this.actions$.pipe(
    ofType(LOAD_TASKS),
    switchMap(() => this.taskService.getTasks().pipe(
      map((tasks: Task[]) => new LoadTasksComplete(tasks)),
      catchError((error) => of(new LoadTasksFailure(error))),
    )),
  );

  @Effect()
  public createTask: Observable<TasksActions> = this.actions$.pipe(
    ofType(CREATE_TASK),
    map((action: CreateTask) => action.payload),
    switchMap(({ dayId, task }) => this.taskService.createTask(dayId, task).pipe(
      map((task: Task) => new CreateTaskComplete(task)),
      catchError((error) => of(new CreateTaskFailure(error))),
    )),
  );

  @Effect()
  public updateTask: Observable<TasksActions> = this.actions$.pipe(
    ofType(UPDATE_TASK),
    map((action: UpdateTask) => action.payload),
    switchMap((task: Task) => this.taskService.updateTask(task).pipe(
      map((task: Task) => new UpdateTaskComplete(task)),
      catchError((error) => of(new UpdateTaskFailure(error))),
    )),
  );

  @Effect()
  public deleteTask: Observable<TasksActions> = this.actions$.pipe(
    ofType(DELETE_TASK),
    map((action: DeleteTask) => action.payload),
    switchMap(({ dayId, id }) => this.taskService.deleteTask(dayId, id).pipe(
      map((id: string) => new DeleteTaskComplete(id)),
      catchError((error) => of(new DeleteTaskFailure(error))),
    )),
  );

  constructor(
    private actions$: Actions,
    private taskService: TaskService,
  ) {}
}