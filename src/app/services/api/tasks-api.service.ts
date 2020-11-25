import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from '../../models/task';
import { Store } from '../../shared/store';
import { Observable } from 'rxjs';

const apiUrl = 'api/tasks/';

@Injectable({
  providedIn: 'root',
})
export class TasksApiService {
  constructor(private http: HttpClient) {}

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(apiUrl);
  }

  createTask(task: Task): Observable<Task> {
    return this.http.post<Task>(apiUrl, task);
  }

  updateTask(task: Task): Observable<Task> {
    return this.http.put<Task>(apiUrl + task.id, task);
  }

  deleteTask(task: Task): Observable<void> {
    return this.http.delete<void>(apiUrl + task.id);
  }
}
