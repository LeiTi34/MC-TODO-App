import { Component, OnInit } from '@angular/core';
import { ToDo } from 'src/app/interface/todo';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  public $todos: ToDo[];

  constructor(
    public dataService: DataService
  ) { }

  ngOnInit(): void {
  }

}
