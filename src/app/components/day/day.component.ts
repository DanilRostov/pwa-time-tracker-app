import { 
  Component, 
  OnInit,
} from '@angular/core';
import { TYPES } from 'src/app/consts/tasks';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { 
  State, 
  getTasks,
} from 'src/app/reducers/tasks.reducer';
import { Task } from 'src/app/models/tasks';
import { LoadTasks } from 'src/app/actions/tasks.actions';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.scss']
})
export class DayComponent implements OnInit {
  public notPlannedAndDoneTasks = [];
  public plannedAndDoneTasks = [];
  public plannedTasks = [];
  public types = TYPES;
  public subscriptions = new Subscription();

  constructor(
    private store: Store<State>,
  ) { }

  public ngOnInit() {
    this.store.dispatch(new LoadTasks());
    this.loadAndFilterTasks();
  }

  public loadAndFilterTasks() {
    this.subscriptions.add(this.store.select(getTasks).subscribe((tasks: Task[]) => {
      this.notPlannedAndDoneTasks = tasks.filter((task) => !task.isPlanned && task.isDone);
      this.plannedAndDoneTasks = tasks.filter((task) => task.isPlanned && task.isDone);
      this.plannedTasks = tasks.filter((task) => task.isPlanned && !task.isDone);
    }));
  }

  public ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
