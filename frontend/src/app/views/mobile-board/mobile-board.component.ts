import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-mobile-board',
  templateUrl: './mobile-board.component.html',
  styleUrls: ['./mobile-board.component.scss'],
})
export class MobileBoardComponent implements OnInit {
  constructor(public dataService: DataService) {}

  ngOnInit(): void {}
}
