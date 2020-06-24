import { Component, OnInit, Input } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { SubTodo } from 'src/app/interfaces/sub-todo';

@Component({
  selector: 'app-subtodo',
  templateUrl: './subtodo.component.html',
  styleUrls: ['./subtodo.component.scss'],
})
export class SubtodoComponent implements OnInit {
  @Input() selectedSubTodo: SubTodo;

  constructor(public dataService: DataService) {}

  ngOnInit(): void {}
}
