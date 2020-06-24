import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-backend',
  templateUrl: './backend.component.html',
  styleUrls: ['./backend.component.scss'],
})
export class BackendComponent implements OnInit {
  public isVisible = false;
  constructor() {}

  ngOnInit(): void {}

  toggle(): void {
    this.isVisible = !this.isVisible;
  }
}
