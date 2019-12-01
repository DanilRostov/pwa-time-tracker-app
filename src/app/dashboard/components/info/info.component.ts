import { 
  Component, 
  Input,
  OnChanges,
} from '@angular/core';
import { 
  Task, 
  TaskStats,
} from 'src/app/dashboard/models/tasks';
import { CounterItem } from 'src/app/dashboard/models/counter';
import { Day } from 'src/app/dashboard/models/day';

const initialStats = {
  notPlannedAndDone: { count: 0, estimation: 0},
  plannedAndDone: { count: 0, estimation: 0},
  planned: { count: 0, estimation: 0},
}

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnChanges {
  @Input() public day: Day;
  public taskStats: TaskStats = { ...initialStats };

  public ngOnChanges() {
    if (this.day.tasks && this.day.tasks.length) {
      this.taskStats = {
        ...this.taskStats,
        notPlannedAndDone: this.getStats(this.day.tasks.filter((task) => !task.isPlanned && task.isDone)),
        plannedAndDone: this.getStats(this.day.tasks.filter((task) => task.isPlanned && task.isDone)),
        planned: this.getStats(this.day.tasks.filter((task) => !task.isDone)),
      }
    } else {
      this.taskStats = { ...initialStats };
    }
  }

  public getStats(tasks: Task[]): CounterItem {
    return {
      count: tasks.length,
      estimation: tasks.map((task) => task.estimation).reduce((prev, next) => prev + next, 0),
    }
  }
}
