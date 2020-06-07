import { Injectable } from '@angular/core';
import { ToDo } from '../interface/todo';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public $todos: ToDo[] = [];

  constructor() { }

  public addTodo(object: ToDo): void {
    this.$todos.push(object);
  }
}
