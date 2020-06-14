import { Component, OnInit, Input } from '@angular/core';
import { SubTodo } from 'src/app/interfaces/sub-todo';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-nav-detail-mobile',
  templateUrl: './nav-detail-mobile.component.html',
  styleUrls: ['./nav-detail-mobile.component.scss']
})
export class NavDetailMobileComponent implements OnInit {

  @Input() subTodo: SubTodo;
  constructor(public dataService: DataService) { }

  ngOnInit(): void {
  }

}
