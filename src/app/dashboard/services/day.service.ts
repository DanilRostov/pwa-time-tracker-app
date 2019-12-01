import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { Day } from '../models/day';
import { days } from '../../api/days';

@Injectable({
  providedIn: 'root'
})
export class DayService {

  constructor(
    private http: HttpClient,
  ) { }

  public getDays(dateFrom: string, dateTo: string) {
    const url = `http://localhost:5000/api/days?dateFrom=${dateFrom}&dateTo=${dateTo}`;
    return this.http.get<Day[]>(url);
  }

  public updateDay(day: Day) {
    const url = `http://localhost:5000/api/days`;
    const body = day;
    return this.http.put<Day>(url, body);
  }
}
