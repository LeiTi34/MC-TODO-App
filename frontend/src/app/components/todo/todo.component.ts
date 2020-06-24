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

  /*
  prettyDate(time){

    // if the date is empty then return the
    if ( !time ) { return	'Never'; }

    // tslint:disable-next-line: prefer-const
    // tslint:disable-next-line: one-variable-per-declaration
    var date = new Date( typeof time === "string" ? (time || "").replace(/-/g,"/").replace(/[TZ]/g," ") : time*1000),
    diff = (((new Date()).getTime() - date.getTime()) / 1000),
    day_diff = Math.floor(diff / 86400),
    out = "Some time ago";

    switch(true) {
      case diff < 60:
      out = 'Just now';
      break;
      case diff < 120:
      out = '1 minute ago';
      break;
      case diff < 3600:
      out = Math.floor( diff / 60 ) + ' minutes ago';
      break;
      case diff < 7200:
      out = '1 hour ago';
      break;
      case diff < 86400:
      out = Math.floor( diff / 3600 ) + ' hours ago';
      break;
      case day_diff == 1:
      out = 'Yesterday';
      break;
      case day_diff < 7:
      out = day_diff + " days ago";
      break;
      case day_diff < 31:
      out = Math.ceil( day_diff / 7 ) + " weeks ago";
      break;
      case day_diff < 366:
      out = Math.floor( day_diff / 30 ) + " months ago";
      break;
      case day_diff > 365:
      out = Math.floor( day_diff / 365 ) + " years ago";
      break;
    };

    return out;
  }

  return prettyDate;
  */
}
