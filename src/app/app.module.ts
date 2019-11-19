import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ReactiveFormsModule } from '@angular/forms';

import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

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
import { TasksEffects } from './effects/tasks.effects';
import { DayEffects } from './effects/day.effects';
import { HttpClientModule } from '@angular/common/http';
import { daysReducer } from './reducers/days.reducer';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto'
};

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
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    SwiperModule,
    StoreModule.forRoot({ days: daysReducer }),
    EffectsModule.forRoot([ DayEffects, TasksEffects ]),
    StoreDevtoolsModule.instrument(),
  ],
  providers: [
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
