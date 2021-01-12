import { Injectable } from '@angular/core';
import { Todo } from '../models/product.models';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  
   todo: Todo[] = [];
 

  constructor() {
    if (localStorage.getItem('todo')){
     this.todo = JSON.parse(localStorage.getItem('todo'));
    }
   }
  getTodo() {
    return this.todo;
  }
  
  addTodoStorage(todo: any) {
    this.todo.push({
      name: todo.name,
      complete: false
    });
    localStorage.setItem('todo', JSON.stringify(this.todo));
  }

  deleteTodo(i: number) {
    this.todo.splice(i, 1);
    localStorage.setItem('todo', JSON.stringify(this.todo));
  }

  changeTodo(event: any) {
    localStorage.setItem('todo', JSON.stringify(this.todo));
  }
}