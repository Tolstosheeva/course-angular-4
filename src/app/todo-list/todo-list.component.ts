import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  items: string[] = [];
  newTask!: string;
  taskIsDone = false;



  addToList() {
    if (this.newTask == '') {
    }
    else {
      this.items.push(this.newTask);
      this.newTask = '';
      
    }
  }

  deleteTask(index: number) {
    this.items.splice(index, 1);
  }

  successful() {
    
  }

  constructor() { }

  ngOnInit(): void {
  }

}