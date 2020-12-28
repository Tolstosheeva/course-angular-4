import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/shared/models/todo.model';
import { DataService } from 'src/app/shared/servises/data.service';

@Component({
  selector: 'app-todo-single',
  templateUrl: './todo-single.component.html',
  styleUrls: ['./todo-single.component.scss']
})
export class TodoSingleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const id =+this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.dataService.getPostById(id).subscribe((res:Todo) =>{
      this.todo(res);
    })
  }
    allTodos() {
      this.route.navigate(['todo']);
    }
  }
  
  
