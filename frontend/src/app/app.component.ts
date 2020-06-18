import { Component, HostListener } from '@angular/core';
import { DataService } from './services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontend';

    constructor(public dataService: DataService, public router: Router) {
        this.getScreenSize();
    }

    @HostListener('window:resize', ['$event'])
    getScreenSize(event?) {
          this.dataService.width = window.innerWidth;
          this.dataService.height = window.innerHeight;
          console.log(this.dataService.height, this.dataService.width);
    }
}
