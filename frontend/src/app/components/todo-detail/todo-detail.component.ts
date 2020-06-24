import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Todo } from 'src/app/interfaces/todo';
import { SubTodo } from 'src/app/interfaces/sub-todo';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.scss']
})
export class TodoDetailComponent implements OnInit {
  @ViewChild('fileInput')
  fileInput;

  subTodo$: SubTodo;
  @Input() currentTodo: Todo;
  @Input() dueDate: Date = undefined;
  @Input() reminderDate: Date = undefined;
  @Input() repeatInterval: string = undefined;
  @Input() notes: string = undefined;

  file: File | null = null;

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
    this.dueDate = this.currentTodo.dueDate;
    this.reminderDate = this.currentTodo.reminderDate;
    this.repeatInterval = this.currentTodo.repeatInterval;
    this.notes = this.currentTodo.note;
    //this.currentTodo = this.dataService.selectedTodo;
  }

  dueDateChange(): void {
    console.log(this.dueDate);
    this.currentTodo.dueDate = this.dueDate;
    this.dataService.updateTodo(this.currentTodo);
  }

  reminderChange(): void {
    console.log(this.reminderDate);
    this.currentTodo.reminderDate = this.reminderDate;
    this.dataService.updateTodo(this.currentTodo);
  }

  repeatSet(): void {
    this.repeatInterval = 'Weekly';
    this.currentTodo.repeatInterval = this.repeatInterval;
    this.dataService.updateTodo(this.currentTodo);
  }

  onClickFileInputButton(): void {
    this.fileInput.nativeElement.click();
  }

  onChangeFileInput(): void {
    const files: { [key: string]: File } = this.fileInput.nativeElement.files;
    this.file = files[0];
  }

  updateNotes(): void {
    this.currentTodo.note = this.notes;
    this.dataService.updateTodo(this.currentTodo);
    document.getElementById('noteInput').blur();
  }



  public addSubTodo(): void {
    if (!this.subTodo$.title) {
      return;
    }
    this.subTodo$.position = this.dataService.selectedTodo.subTodos.length + 1;
    //this.dataService.selectedTodo.subTodos.push(this.subTodo$);
    this.currentTodo.subTodos.push(this.subTodo$);
    this.dataService.updateTodo(this.currentTodo);
    console.log(this.currentTodo);

    this.subTodo$ = {
      position: undefined,
      title: undefined,
      isDone: false
    };
  }

  triggerDone(): void {
    this.currentTodo.isDone = !this.currentTodo.isDone;
    this.dataService.updateTodo(this.currentTodo);
  }
}
