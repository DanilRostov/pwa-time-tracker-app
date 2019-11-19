import { 
  Component, 
  OnInit,
  OnDestroy,
} from '@angular/core';
import { daysSettings } from 'src/app/consts/day';
import { Day } from 'src/app/models/day';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { 
  State, 
  selectDays,
} from 'src/app/reducers/days.reducer';
import { LoadDays } from 'src/app/actions/day.actions';
import { CreateTaskData } from 'src/app/models/tasks';
import { CreateTask } from 'src/app/actions/tasks.actions';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {
  public days: Day[];
  public todayDate = new Date();
  public currentDay: Day = { date: new Date() };
  public initialIndex: number;
  public currentIndex: number;
  public subscriptions = new Subscription();
  public isDaysLoaded = false;

  constructor(
    private store: Store<State>,
  ) { }

  public ngOnInit() {
    this.requestDays();
    this.subscriptions.add(this.store.select(selectDays).subscribe((days: Day[]) => {
      if (days.length) {
        this.days = [ ...days ];
        if (!this.isDaysLoaded) {
          this.initialIndex = this.getInitalSlideIndex();
          this.currentIndex = this.initialIndex;
        }
        this.updateCurrentDay();
        this.isDaysLoaded = true;
      }
    }));
  }

  public requestDays() {
    const dateFrom = new Date(new Date().setDate(new Date().getDate() - daysSettings.prevDaysCount)).toISOString();
    const dateTo = new Date(new Date().setDate(new Date().getDate() + daysSettings.nextDaysCount)).toISOString();
    this.store.dispatch(new LoadDays({ dateFrom, dateTo }));
  }

  public getInitalSlideIndex(): number {
    return (this.days.length - this.days.length % 2) / 2;
  }

  public onSlideChange(index): void {
    this.currentIndex = index;
    this.updateCurrentDay();
  }

  public updateCurrentDay(): void {
    this.currentDay = { ...this.days[this.currentIndex] };
  }

  public createTask(task: CreateTaskData) {
    this.store.dispatch(new CreateTask({ dayId: this.currentDay.id, task }));
  }

  public ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
