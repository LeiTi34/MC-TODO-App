import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

import { OverviewComponent } from './components/overview/overview.component';
import { TodoComponent } from './components/todo/todo.component';
import { NavMobileComponent } from './components/nav-mobile/nav-mobile.component';
import { TodoFormComponent } from './components/todo-form/todo-form.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TodoDetailComponent } from './components/todo-detail/todo-detail.component';
import { AppRoutingModule } from './app-routing.module';
import { NavDetailMobileComponent } from './components/nav-detail-mobile/nav-detail-mobile.component';
import { SubtodoComponent } from './components/subtodo/subtodo.component';
import { MobileBoardComponent } from './views/mobile-board/mobile-board.component';
import { MobileTodoComponent } from './views/mobile-todo/mobile-todo.component';
import { MobileBoardsComponent } from './views/mobile-boards/mobile-boards.component';
import { NavBoardsMobileComponent } from './components/nav-boards-mobile/nav-boards-mobile.component';
import { BoardComponent } from './components/board/board.component';
import { DesktopComponent } from './views/desktop/desktop.component';
import { NavDesktopComponent } from './components/nav-desktop/nav-desktop.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AppComponent,
    OverviewComponent,
    TodoComponent,
    NavMobileComponent,
    TodoFormComponent,
    TodoDetailComponent,
    NavDetailMobileComponent,
    SubtodoComponent,
    MobileBoardComponent,
    MobileTodoComponent,
    MobileBoardsComponent,
    NavBoardsMobileComponent,
    BoardComponent,
    DesktopComponent,
    NavDesktopComponent
  ],
  imports: [
    BrowserModule,
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
