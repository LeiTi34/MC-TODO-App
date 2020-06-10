import { Injectable } from '@angular/core';
import { Todo } from '../interfaces/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {
  todos: Todo[] = [];

  constructor() { }

  addTodo(todo: Todo): TodoDataService {
    if (!todo.position) {
      todo.position = this.todos.length + 1;
    }
    this.todos.push(todo);
    return this;
  }

  // Simulate DELETE /todos/:id
  deleteTodoById(position: number): TodoDataService {
    this.todos = this.todos
      .filter(todo => todo.position !== position);
    return this;
  }

  // Simulate PUT /todos/:id
  updateTodoById(position: number, values: Object = {}): Todo {
    let todo = this.getTodoById(position);
    if (!todo) {
      return null;
    }
    Object.assign(todo, values);
    return todo;
  }

  // Simulate GET /todos
  getAllTodos(): Todo[] {
    return this.todos;
  }

  // Simulate GET /todos/:id
  getTodoById(position: number): Todo {
    return this.todos
      .filter(todo => todo.position === position)
      .pop();
  }

  // Toggle todo complete
  toggleTodoComplete(todo: Todo){
    let updatedTodo = this.updateTodoById(todo.position, {
      complete: !todo.isDone
    });
    return updatedTodo;
  }
}
