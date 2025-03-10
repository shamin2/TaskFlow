import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable,of } from 'rxjs';
import{ Task } from '../Task';
import {TASKS} from '../../mock-tasks';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:5000/tasks'; //  API endpoint

  constructor(private http: HttpClient) {} //  Inject HttpClient

  getTasks(): Observable<Task[]> { 
    return this.http.get<Task[]>(this.apiUrl); //  Fetch data dynamically from API

  }
  deleteTask(task: Task): Observable<Task>{
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.delete<Task>(url);


  }
}
