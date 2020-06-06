import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OverviewComponent } from './components/overview/overview.component';
import { TodoComponent } from './components/todo/todo.component';
import { NavMobileComponent } from './components/nav-mobile/nav-mobile.component';

@NgModule({
  declarations: [
    AppComponent,
    OverviewComponent,
    TodoComponent,
    NavMobileComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
