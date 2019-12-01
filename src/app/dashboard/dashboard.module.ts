import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

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

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto'
};

@NgModule({
  declarations: [
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
    RemoveBtnComponent,
  ],
  providers: [
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    }
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SwiperModule,
  ]
})
export class DashboardModule { }
