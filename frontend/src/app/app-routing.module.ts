import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MobileBoardComponent } from './views/mobile-board/mobile-board.component';
import { MobileTodoComponent } from './views/mobile-todo/mobile-todo.component';
import { MobileBoardsComponent } from './views/mobile-boards/mobile-boards.component';

const routes: Routes = [
  { path: 'boards', component: MobileBoardsComponent },
  { path: 'todos', component: MobileBoardComponent },
  { path: 'todo', component: MobileTodoComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
