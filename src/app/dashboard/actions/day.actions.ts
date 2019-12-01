import { Action } from '@ngrx/store';
import { Day } from '../models/day';

export const LOAD_DAYS = '[Days] Load days';
export const LOAD_DAYS_COMPLETE = '[Days] Load days complete';
export const LOAD_DAYS_FAILURE = '[Days] Load days failure';

export const UPDATE_DAY = '[Days] Update day';
export const UPDATE_DAY_COMPLETE = '[Days] Update day complete';
export const UPDATE_DAY_FAILURE = '[Days] Update day failure';

export class LoadDays implements Action {
  public readonly type = LOAD_DAYS;
  constructor(public payload: { dateFrom: string, dateTo: string }) {}
}

export class LoadDaysComplete implements Action {
  public readonly type = LOAD_DAYS_COMPLETE;
  constructor(public payload: Day[]) {}
}

export class LoadDaysFailure implements Action {
  public readonly type = LOAD_DAYS_FAILURE;
  constructor(public payload: string) {}
}

export class UpdateDay implements Action {
  public readonly type = UPDATE_DAY;
  constructor(public payload: Day) {}
}

export class UpdateDayComplete implements Action {
  public readonly type = UPDATE_DAY_COMPLETE;
  constructor(public payload: Day) {}
}

export class UpdateDayFailure implements Action {
  public readonly type = UPDATE_DAY_FAILURE;
  constructor(public payload: string) {}
}

export type DayActions =
  | LoadDays
  | LoadDaysComplete
  | LoadDaysFailure
  | UpdateDay
  | UpdateDayComplete
  | UpdateDayFailure;