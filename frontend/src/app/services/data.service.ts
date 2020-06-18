import { Injectable } from '@angular/core';
import { Todo } from '../interfaces/todo';
import { SubTodo } from '../interfaces/sub-todo';
import { Board } from '../interfaces/board';
import { BOARDS } from '../mock-boards';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  //public $todos: Todo[] = TODOS;
  public boards: Board[] = BOARDS;
  public selectedBoard: Board = BOARDS[0];
  public selectedTodo: Todo;

  public width = 0;
  public height = 0;

  public notification = false;

  constructor() { }

  public addTodo(object: Todo): void {
    this.selectedBoard.todos.push(object);
    console.log('Added ' + object.title + ' to ' + this.selectedBoard.name);
    console.log(this.boards);
  }

  public updateTodo(object: Todo): void {
    const updateItem = this.selectedBoard.todos.find(x => x.position === object.position);
    const index = this.selectedBoard.todos.indexOf(updateItem);
    this.selectedBoard.todos[index] = object;
    this.selectedTodo = object;
    console.log('Updated ' + object.title);
    //console.log(object);
  }

  triggerDone(object: Todo): void {
    object.isDone = !object.isDone;
    this.updateTodo(object);
    console.log('Toggled: ' + this.selectedTodo.title + ' : ' + this.selectedTodo.isDone);
  }

  triggerSubDone(object: SubTodo): void {
    const updateItem = this.selectedTodo.subTodos.find(x => x.position === object.position);
    const index = this.selectedTodo.subTodos.indexOf(updateItem);
    object.isDone = !object.isDone;
    this.selectedTodo.subTodos[index] = object;
  }

  deleteSub(object: SubTodo): void {
    const updateItem = this.selectedTodo.subTodos.find(x => x.position === object.position);
    const index = this.selectedTodo.subTodos.indexOf(updateItem);
    this.selectedTodo.subTodos.splice(index, 1);
    this.updateTodo(this.selectedTodo);
  }

  isMobile(): boolean {
    const ua = navigator.userAgent;

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(ua) && this.width < 768) {
       return true;
    } else {
       return false;
    }
  }
}
