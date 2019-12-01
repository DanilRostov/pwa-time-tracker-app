import { Injectable } from '@angular/core';
import {
  Actions,
  Effect,
  ofType,
} from '@ngrx/effects';
import {
  switchMap, 
  map, 
  catchError,
} from 'rxjs/operators';
import { 
  Observable, 
  of,
} from 'rxjs';
import { 
  DayActions, 
  LOAD_DAYS, 
  LoadDaysComplete, 
  LoadDays, 
  LoadDaysFailure,
  UPDATE_DAY,
  UpdateDay,
  UpdateDayComplete,
  UpdateDayFailure, 
} from '../actions/day.actions';
import { Day } from '../models/day';
import { DayService } from '../services/day.service';

@Injectable()
export class DayEffects {

  @Effect()
  public loadDays: Observable<DayActions> = this.actions$.pipe(
    ofType(LOAD_DAYS),
    map((action: LoadDays) => action.payload),
    switchMap(({ dateFrom, dateTo }) => this.dayService.getDays(dateFrom, dateTo).pipe(
      map((days: Day[]) => new LoadDaysComplete(days)),
      catchError((error) => of(new LoadDaysFailure(error))),
    )),
  );

  @Effect()
  public updateDay: Observable<DayActions> = this.actions$.pipe(
    ofType(UPDATE_DAY),
    map((action: UpdateDay) => action.payload),
    switchMap((day: Day) => this.dayService.updateDay(day).pipe(
      map((day: Day) => new UpdateDayComplete(day)),
      catchError((error) => of(new UpdateDayFailure(error))),
    )),
  );

  constructor(
    private actions$: Actions,
    private dayService: DayService,
  ) {}
}