import { Component, OnInit, Input } from '@angular/core';
import { Todo } from 'src/app/interfaces/todo';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  @Input() selectedTodo: Todo;

  constructor(public dataService: DataService, private router: Router) {}

  ngOnInit(): void {}

  openTodo(): void {
    console.log('Select/Open todo: ' + this.selectedTodo.title);
    this.dataService.selectedTodo = this.selectedTodo;
    this.router.navigate(['/todo']);
  }
}
