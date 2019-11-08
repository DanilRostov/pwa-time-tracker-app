import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoComponent } from './components/logo/logo.component';
import { InfoComponent } from './components/info/info.component';
import { DateComponent } from './components/date/date.component';
import { TasksCounterComponent } from './components/tasks-counter/tasks-counter.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DayComponent } from './components/day/day.component';
import { CategoryComponent } from './components/category/category.component';
import { TaskComponent } from './components/task/task.component';
import { DoneBtnComponent } from './components/done-btn/done-btn.component';
import { MooveNextBtnComponent } from './components/moove-next-btn/moove-next-btn.component';
import { CreateBtnComponent } from './components/create-btn/create-btn.component';
import { CreateModalComponent } from './components/create-modal/create-modal.component';
import { LocationModalComponent } from './components/location-modal/location-modal.component';
import { RemoveBtnComponent } from './components/remove-btn/remove-btn.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoComponent,
    InfoComponent,
    DateComponent,
    TasksCounterComponent,
    DashboardComponent,
    DayComponent,
    CategoryComponent,
    TaskComponent,
    DoneBtnComponent,
    MooveNextBtnComponent,
    CreateBtnComponent,
    CreateModalComponent,
    LocationModalComponent,
    RemoveBtnComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
