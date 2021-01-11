import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Todo } from '../shared/models/product.models';
import { TodoService } from '../shared/models/service/todo.service';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  
  todo: Todo[] = [];

  todoForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private todoService: TodoService
  ) { }

  ngOnInit(): void {
    this.todoForm = this.fb.group({
      name: ''
    });
    this.todo = this.todoService.getTodo();
  }

  addTodo() {
    console.log(this.todoForm.value);
    this.todoService.addTodoStorage(this.todoForm.value);
    this.todoForm = this.fb.group({
      name: ''
    });
  }

  changeTodo(event: any) {
    console.log(event.currentTarget.checked);
    this.todoService.changeTodo(event);
  }

  deleteTodo(i: any) {
    this.todoService.deleteTodo(i);
  }

  

}
