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

  constructor(
    private actions$: Actions,
    private taskService: TaskService,
  ) {}
}