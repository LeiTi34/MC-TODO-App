import { Component, OnInit } from '@angular/core';
import { ToDo } from 'src/app/interface/todo';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {

  public toDo$: ToDo;

  constructor(
    public dataService: DataService
  ) {
    this.toDo$ = {
      position: undefined,
      title: undefined,
      isDone: false,
      note: undefined,
      reminderDate: undefined,
      dueDate: undefined,
      repeatInterval: undefined,
      createdDate: undefined,
      updateDate: undefined
    };
  }

  ngOnInit(): void {
  }

  public createNewTodo(): void {
    this.toDo$.position = this.dataService.$todos.length + 1;
    this.toDo$.dueDate = new Date();
    this.toDo$.reminderDate = new Date();
    this.toDo$.repeatInterval = 'Monthly';
    this.toDo$.createdDate = new Date();
    this.toDo$.updateDate = new Date();
    this.dataService.addTodo(this.toDo$);

    this.toDo$ = {
      position: undefined,
      title: undefined,
      isDone: false,
      note: undefined,
      reminderDate: undefined,
      dueDate: undefined,
      repeatInterval: undefined,
      createdDate: undefined,
      updateDate: undefined
    };
  }
}
