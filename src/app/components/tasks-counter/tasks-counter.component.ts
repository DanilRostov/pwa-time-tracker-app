import { 
  Component, 
  Input,
  OnChanges,
} from '@angular/core';
import { TaskStats } from 'src/app/models/tasks';
import { CounterItem } from 'src/app/models/counter';

@Component({
  selector: 'app-tasks-counter',
  templateUrl: './tasks-counter.component.html',
  styleUrls: ['./tasks-counter.component.scss']
})
export class TasksCounterComponent implements OnChanges {
  @Input() public taskStats: TaskStats;
  public completed: CounterItem = {
    count: 0,
    estimation: 0,
  };
  public toDo: CounterItem = {
    count: 0,
    estimation: 0,
  };
  public total: CounterItem = {
    count: 0,
    estimation: 0,
  };

  public ngOnChanges() {
    if (this.taskStats.notPlannedAndDone && this.taskStats.plannedAndDone && this.taskStats.planned) {
      this.calculateCompleted();
      this.calculateToDo();
      this.calculateTotal();
    }
  }

  public calculateCompleted() {
    this.completed.count = this.taskStats.notPlannedAndDone.count + this.taskStats.plannedAndDone.count;
    this.completed.estimation = this.taskStats.notPlannedAndDone.estimation + this.taskStats.plannedAndDone.estimation;
  }

  public calculateToDo() {
    this.toDo.count = this.taskStats.planned.count;
    this.toDo.estimation = this.taskStats.planned.estimation;
  }

  public calculateTotal() {
    this.total.count = this.taskStats.notPlannedAndDone.count + 
      this.taskStats.plannedAndDone.count + 
      this.taskStats.planned.count;
    this.total.estimation = this.taskStats.notPlannedAndDone.estimation + 
      this.taskStats.plannedAndDone.estimation + 
      this.taskStats.planned.estimation;
  }
}
