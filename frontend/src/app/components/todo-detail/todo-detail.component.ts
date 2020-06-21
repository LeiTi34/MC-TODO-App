import { Component, OnInit, Input } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Todo } from 'src/app/interfaces/todo';
import { SubTodo } from 'src/app/interfaces/sub-todo';
//import {MatDatepickerModule} from '@angular/material';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.scss']
})
export class TodoDetailComponent implements OnInit {

  subTodo$: SubTodo;
  @Input() currentTodo: Todo;

  constructor(
    public dataService: DataService
    ) {
    this.subTodo$ = {
      position: undefined,
      title: undefined,
      isDone: false
    };
  }

  ngOnInit(): void {
    //this.currentTodo = this.dataService.selectedTodo;
  }

  public addSubTodo(): void {
    if (!this.subTodo$.title) {
      return;
    }
    this.subTodo$.position = this.dataService.selectedTodo.subTodos.length + 1;
    this.currentTodo.subTodos.push(this.subTodo$);
    this.dataService.updateTodo(this.currentTodo);
    console.log(this.currentTodo);

    this.subTodo$ = {
      position: undefined,
      title: undefined,
      isDone: false
    };
  }

  triggerDone(): void {
    this.currentTodo.isDone = !this.currentTodo.isDone;
    this.dataService.updateTodo(this.currentTodo);
  }
}
