import { Injectable } from "@angular/core";
import { Todo } from "../interfaces/todo";
import { SubTodo } from "../interfaces/sub-todo";
import { Board } from "../interfaces/board";
import { User } from "../interfaces/user";
import { BOARDS } from "../mock-boards";
import { Observable } from "rxjs/internal/Observable";
import { Token } from "../interfaces/token";
import { HttpHeaders, HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class DataService {
  private Url = "http://localhost:3000";

  private loginUrl = this.Url + "/auth/login";
  private registerUrl = this.Url + "/auth/register";
  private token: Token;

  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
  };

  //public $todos: Todo[] = TODOS;
  public boards: Board[] = BOARDS;
  public selectedBoard: Board = BOARDS[0];
  public selectedTodo: Todo;

  public width = 0;
  public height = 0;

  public notification = false;

  constructor(private http: HttpClient) {}

  public login(user: User): boolean {
    this.http
      .post<Token>(this.loginUrl, user, this.httpOptions)
      .subscribe((data) => (this.token = data));

    return this.token != null;
  }

  public register(user: User): boolean {
    this.http
      .post<Token>(this.loginUrl, user, this.httpOptions)
      .subscribe((data) => (this.token = data));

    return this.token != null;
  }

  public addTodo(object: Todo): void {
    this.selectedBoard.todos.push(object);
    console.log("Added " + object.title + " to " + this.selectedBoard.name);
    console.log(this.boards);
  }

  public updateTodo(object: Todo): void {
    const updateItem = this.selectedBoard.todos.find(
      (x) => x.position === object.position
    );
    const index = this.selectedBoard.todos.indexOf(updateItem);
    this.selectedBoard.todos[index] = object;
    this.selectedTodo = object;
    console.log("Updated " + object.title);
    //console.log(object);
  }

  triggerDone(object: Todo): void {
    object.isDone = !object.isDone;
    this.updateTodo(object);
    console.log(
      "Toggled: " + this.selectedTodo.title + " : " + this.selectedTodo.isDone
    );
  }

  triggerSubDone(object: SubTodo): void {
    const updateItem = this.selectedTodo.subTodos.find(
      (x) => x.position === object.position
    );
    const index = this.selectedTodo.subTodos.indexOf(updateItem);
    object.isDone = !object.isDone;
    this.selectedTodo.subTodos[index] = object;
  }

  deleteSub(object: SubTodo): void {
    const updateItem = this.selectedTodo.subTodos.find(
      (x) => x.position === object.position
    );
    const index = this.selectedTodo.subTodos.indexOf(updateItem);
    this.selectedTodo.subTodos.splice(index, 1);
    this.updateTodo(this.selectedTodo);
  }

  isMobile(): boolean {
    const ua = navigator.userAgent;

    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(
        ua
      ) &&
      this.width < 768
    ) {
      return true;
    } else {
      return false;
    }
  }

  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
