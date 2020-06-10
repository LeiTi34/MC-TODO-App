import { Component, OnInit, Input } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Todo } from 'src/app/interfaces/todo';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {

  @Input() toDo$: Todo;

  constructor(
    public dataService: DataService
  ) {
    this.toDo$ = {
      position: undefined,
      title: undefined,
      isDone: false,
      note: undefined,
      subTodos: [],
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
    if (!this.toDo$.title) {
      return;
    }
    this.toDo$.position = this.dataService.$todos.length + 1;
    this.toDo$.createdDate = new Date();
    this.toDo$.updateDate = new Date();
    this.dataService.addTodo(this.toDo$);

    this.toDo$ = {
      position: undefined,
      title: undefined,
      isDone: false,
      note: undefined,
      subTodos: [undefined],
      reminderDate: undefined,
      dueDate: undefined,
      repeatInterval: undefined,
      createdDate: undefined,
      updateDate: undefined
    };
  }
}
