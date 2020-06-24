import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MobileBoardComponent } from './views/mobile-board/mobile-board.component';
import { MobileTodoComponent } from './views/mobile-todo/mobile-todo.component';
import { MobileBoardsComponent } from './views/mobile-boards/mobile-boards.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { BackendComponent } from './views/backend/backend.component';

const routes: Routes = [
  { path: 'boards', component: MobileBoardsComponent },
  { path: 'todos', component: MobileBoardComponent },
  { path: 'todo', component: MobileTodoComponent },
  { path: '', component: LoginComponent },
  { path: 'register', component: RegisterComponent }, //localhost:4200/register
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: BackendComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
