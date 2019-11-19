import { 
  Component, 
  Input,
  OnChanges,
} from '@angular/core';

import { TYPES } from 'src/app/consts/tasks';
import { Day } from 'src/app/models/day';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.scss']
})
export class DayComponent implements OnChanges {
  @Input() public data: Day;
  public isDayEmpty = true;
  public notPlannedAndDoneTasks = [];
  public plannedAndDoneTasks = [];
  public plannedTasks = [];
  public types = TYPES;

  public ngOnChanges() {
    if (this.data.tasks && this.data.tasks.length) {
      this.setAndFilterTasks();
      this.isDayEmpty = false;
    }
  }

  public setAndFilterTasks() {
    this.notPlannedAndDoneTasks = this.data.tasks.filter((task) => !task.isPlanned && task.isDone);
    this.plannedAndDoneTasks = this.data.tasks.filter((task) => task.isPlanned && task.isDone);
    this.plannedTasks = this.data.tasks.filter((task) => !task.isDone);
  }
}
