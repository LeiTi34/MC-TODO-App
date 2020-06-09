import { Component, OnInit, Input } from '@angular/core';
import { ToDo } from 'src/app/interface/todo';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
  animations: [
    trigger(
      'inOutAnimation',
      [
        transition(':enter', animate('1s ease-out')),
        transition(':leave', animate('1s ease-in'))
      ]
    )
  ]
})
export class TodoComponent implements OnInit {

  @Input() toDo$: ToDo;

  constructor() { }

  ngOnInit(): void {
  }

  printTodo(event: any): void {
    if (event.target === event.currentTarget) {
      console.log(this.toDo$);
    }
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
