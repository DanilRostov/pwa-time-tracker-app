import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { 
  Task, 
  CreateTaskData,
} from '../models/tasks';
import { tasks } from '../api/tasks';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(
    private http: HttpClient,
  ) { }

  public getTasks() {
    return of(tasks);
  }

  public createTask(dayId: string, task: CreateTaskData) {
    const url = `http://localhost:5000/api/tasks`;
    const body = { dayId, task };
    return this.http.post<Task>(url, body);
  }

  public updateTask(task: Task) {
    const url = `http://localhost:5000/api/tasks`;
    const body = { ...task };
    return this.http.put<Task>(url, body);
  }

  public deleteTask(dayId: string, id: string) {
    const url = `http://localhost:5000/api/tasks?id=${id}&dayId=${dayId}`;
    return this.http.delete<string>(url);
  }
}
