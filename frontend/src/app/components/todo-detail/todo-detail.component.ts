import { Component, OnInit, Input } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Todo } from 'src/app/interfaces/todo';
import { SubTodo } from 'src/app/interfaces/sub-todo';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.scss']
})
export class TodoDetailComponent implements OnInit {

  @Input() subTodo$: SubTodo;
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
  }

  public addSubTodo(): void {
    this.subTodo$.position = this.dataService.$selectedTodo.subTodos.length + 1;
    this.currentTodo.subTodos.push(this.subTodo$);
    this.dataService.updateTodo(this.currentTodo);
    console.log(this.currentTodo);

    this.subTodo$ = {
      position: undefined,
      title: undefined,
      isDone: false
    };
  }
}
