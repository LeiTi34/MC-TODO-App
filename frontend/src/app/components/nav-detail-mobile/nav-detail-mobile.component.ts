import { Component, OnInit, Input } from '@angular/core';
import { SubTodo } from 'src/app/interfaces/sub-todo';

@Component({
  selector: 'app-nav-detail-mobile',
  templateUrl: './nav-detail-mobile.component.html',
  styleUrls: ['./nav-detail-mobile.component.scss']
})
export class NavDetailMobileComponent implements OnInit {

  @Input() subTodo: SubTodo;
  constructor() { }

  ngOnInit(): void {
  }

}
