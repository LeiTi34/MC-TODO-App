import { Injectable } from '@angular/core';
import { Todo } from '../interfaces/todo';
import { SubTodo } from '../interfaces/sub-todo';
import { TODOS } from '../mock-todos';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  public $todos: Todo[] = TODOS;
  public $selectedTodo: Todo;
  //public $selectedBoard: Board;

  constructor() { }

  public selectTodo(todo: Todo): void {
    this.$selectedTodo = todo;
  }

  public addTodo(object: Todo): void {
    this.$todos.push(object);
    console.log(this.$todos);
  }

  public updateTodo(object: Todo): void {
    const updateItem = this.$todos.find(x => x.position === object.position);
    const index = this.$todos.indexOf(updateItem);
    this.$todos[index] = object;
    this.selectTodo(object);
    console.log(this.$todos);
  }
}
