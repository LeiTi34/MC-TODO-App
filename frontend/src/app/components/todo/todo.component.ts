import { Component, OnInit, Input } from '@angular/core';
import { ToDo } from 'src/app/interface/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  @Input() toDo$: ToDo;

  constructor() { }

  ngOnInit(): void {
  }

  printTodo(event: any): void {
    if (event.target === event.currentTarget) {
      console.log(this.toDo$);
    }
  }

}
