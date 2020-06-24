import { Component, OnInit, Input } from '@angular/core';
import { Board } from 'src/app/interfaces/board';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {
  @Input() selectedBoard: Board;

  constructor(public dataService: DataService, private router: Router) {}

  ngOnInit(): void {}

  openBoard(): void {
    this.dataService.selectedBoard = this.selectedBoard;
    this.router.navigate(['/todos']);
    console.log('Select/open board: ' + this.selectedBoard.name);
  }
}
