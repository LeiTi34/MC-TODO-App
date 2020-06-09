import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { OverviewComponent } from './components/overview/overview.component';
import { TodoComponent } from './components/todo/todo.component';
import { NavMobileComponent } from './components/nav-mobile/nav-mobile.component';
import { TodoFormComponent } from './components/todo-form/todo-form.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    OverviewComponent,
    TodoComponent,
    NavMobileComponent,
    TodoFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
