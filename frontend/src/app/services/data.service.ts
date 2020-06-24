import { Injectable } from "@angular/core";
import { Todo } from "../interfaces/todo";
import { SubTodo } from "../interfaces/sub-todo";
import { Board } from "../interfaces/board";
import { User } from "../interfaces/user";
import { BOARDS } from "../mock-boards";
import { Observable } from "rxjs/internal/Observable";
import { Token } from "../interfaces/token";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { of } from "rxjs";
import { Router } from "@angular/router";

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
  public selectedUser: User;

  public loginCredential: string;
  public loginPassword: string;

  public width = 0;
  public height = 0;

  public notification = false;

  constructor(private http: HttpClient, private router: Router) {
    this.selectedUser = { username: "", password: "", email: "" };
  }

  public async login(user: User): Promise<boolean> {
    console.log(user);
    this.token = await this.http
      .post<Token>(this.loginUrl, user, this.httpOptions)
      .toPromise();

    console.log(this.token);

    if (this.token != null) {
      this.router.navigate(["/boards"]);
    }
    return this.token != null;
  }

  public async register(user: User): Promise<boolean> {
    console.log(user);
    this.token = await this.http
      .post<Token>(this.registerUrl, user, this.httpOptions)
      .toPromise();

    if (this.token != null) {
      this.router.navigate(["/boards"]);
    }
    return this.token != null;
  }

  public setLoginData(): void {
    if (this.loginCredential.includes("@")) {
      this.selectedUser.email = this.loginCredential;
    } else {
      this.selectedUser.username = this.loginCredential;
    }
    this.selectedUser.password = this.loginPassword;
    this.login(this.selectedUser);
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

  //private handleError<T>(operation = "operation", result?: T) {
  //return (error: any): Observable<T> => {
  //// TODO: send the error to remote logging infrastructure
  //console.error(error); // log to console instead

  //// TODO: better job of transforming error for user consumption
  //console.log(`${operation} failed: ${error.message}`);

  //// Let the app keep running by returning an empty result.
  //return of(result as T);
  //};
  //}
}
