import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-nav-mobile',
  templateUrl: './nav-mobile.component.html',
  styleUrls: ['./nav-mobile.component.scss'],
})
export class NavMobileComponent implements OnInit {
  constructor(public dataService: DataService) {}

  ngOnInit(): void {}
}
