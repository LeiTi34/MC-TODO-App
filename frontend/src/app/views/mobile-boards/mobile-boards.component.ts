import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-mobile-boards',
  templateUrl: './mobile-boards.component.html',
  styleUrls: ['./mobile-boards.component.scss'],
})
export class MobileBoardsComponent implements OnInit {
  constructor(public dataService: DataService) {}

  ngOnInit(): void {}
}
