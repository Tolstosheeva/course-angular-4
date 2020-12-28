import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Todo } from '../models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  urlApi = environment.urlApi;

  constructor(
    private http: HttpClient
  ) { }

  getAllTodo(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.urlApi);
  }
  getPostById(id:number){
    return this.http.get<Todo[]>(`https://5fe3bb408bf8af001766e977.mockapi.io/todo/${id}`);
  }
}
