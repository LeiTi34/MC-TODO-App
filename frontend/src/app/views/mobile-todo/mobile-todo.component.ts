import { Component, OnInit, Input } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-mobile-todo',
  templateUrl: './mobile-todo.component.html',
  styleUrls: ['./mobile-todo.component.scss']
})
export class MobileTodoComponent implements OnInit {
  constructor(public dataService: DataService) { }

  ngOnInit(): void {
  }

}
