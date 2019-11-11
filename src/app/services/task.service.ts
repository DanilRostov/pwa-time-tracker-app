import { Injectable } from '@angular/core';
import { tasks } from '../api/tasks';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  public getTasks() {
    return of(tasks);
  }

  public createTask(task) {
    return of(task);
  }
}
