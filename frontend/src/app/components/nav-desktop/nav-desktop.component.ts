import { Component, OnInit, Input } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-nav-desktop',
  templateUrl: './nav-desktop.component.html',
  styleUrls: ['./nav-desktop.component.scss']
})
export class NavDesktopComponent implements OnInit {

  @Input() searchterm: string;

  constructor(public dataService: DataService) { }

  ngOnInit(): void {
  }

  startSearch(): void {
    this.searchterm = '';
    document.getElementById('input').blur();
    this.dataService.notification = !this.dataService.notification;
    document.getElementById('border').classList.remove('borderon');
  }

  onFocus(): void {
    document.getElementById('border').classList.add('borderon');
  }
}
