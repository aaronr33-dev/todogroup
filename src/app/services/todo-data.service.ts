import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from '../todo';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {
  
  constructor(private http: HttpClient ) { }


  fetchListOfTodos(): Observable<any>{
    return this.http.get<any>(`http://localhost:8080/todos`)
  }

  addTodos(todo: Todo): Observable<any>{
    return this.http.post<any>(`http://localhost:8080/todos`, Todo)
  }



}


