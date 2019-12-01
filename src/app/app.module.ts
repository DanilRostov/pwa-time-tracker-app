import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { HttpClientModule } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoComponent } from './components/logo/logo.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { FolderModule } from './folder/folder.module';
import { TasksEffects } from './dashboard/effects/tasks.effects';
import { DayEffects } from './dashboard/effects/day.effects';
import { daysReducer } from './dashboard/reducers/days.reducer';
import { environment } from '../environments/environment';
import { NavigationComponent } from './components/navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationComponent,
    LogoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({ days: daysReducer }),
    EffectsModule.forRoot([ DayEffects, TasksEffects ]),
    StoreDevtoolsModule.instrument(),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    DashboardModule,
    FolderModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
