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
    switchMap((task) => this.taskService.createTask(task).pipe(
      map((task: Task) => new CreateTaskComplete(task)),
      catchError((error) => of(new CreateTaskFailure(error))),
    )),
  );

  constructor(
    private actions$: Actions,
    private taskService: TaskService,
  ) {}
}