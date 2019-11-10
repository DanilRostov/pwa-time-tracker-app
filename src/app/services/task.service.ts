import { Injectable } from '@angular/core';
import { tasks } from '../api/tasks';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  public getTasks() {
    return tasks;
  }
}
