import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-nav-boards-mobile',
  templateUrl: './nav-boards-mobile.component.html',
  styleUrls: ['./nav-boards-mobile.component.scss']
})
export class NavBoardsMobileComponent implements OnInit {

  constructor(public dataService: DataService) { }

  ngOnInit(): void {
  }

}
