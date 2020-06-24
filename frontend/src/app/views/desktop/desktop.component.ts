import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-desktop',
  templateUrl: './desktop.component.html',
  styleUrls: ['./desktop.component.scss']
})
export class DesktopComponent implements OnInit {

  constructor(public dataService: DataService) { }

  ngOnInit(): void {
  }

}
