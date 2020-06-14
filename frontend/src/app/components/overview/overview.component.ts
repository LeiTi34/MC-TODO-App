import { Component, OnInit, Input } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Todo } from 'src/app/interfaces/todo';
import { Router } from '@angular/router';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  @Input() toDo$: Todo;

  constructor(
    public dataService: DataService,
    private router: Router
  ) { }

  ngOnInit(): void { }
}
