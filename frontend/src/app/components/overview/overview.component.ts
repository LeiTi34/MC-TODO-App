import { Component, OnInit, Input } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Todo } from 'src/app/interfaces/todo';
import { TODOS } from 'src/app/mock-todos';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  @Input() toDo$: Todo;

  constructor(
    public dataService: DataService
  ) { }

  ngOnInit(): void { }


  onSelect(todo: Todo): void {
    console.log('Event: ' + todo);
    this.dataService.selectTodo(todo);
    console.log('Selected ToDo:' + this.dataService.$selectedTodo.title);
    this.dataService.$selectedTodo.subTodos.forEach(x => {
      console.log('SubTodo: ' + x.title);
    });
  }

  printTodo(event: any): void {
    if (event.target === event.currentTarget) {
      console.log(this.toDo$);
    }
  }
}
