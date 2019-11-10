import { 
  Component, 
  OnInit,
} from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { TYPES } from 'src/app/consts/tasks';

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

  constructor(
    public taskService: TaskService,
  ) { }

  public ngOnInit() {
    this.loadAndFilterTasks();
  }

  public loadAndFilterTasks() {
    const allTasks = this.taskService.getTasks();
    this.notPlannedAndDoneTasks = allTasks.filter((task) => !task.isPlanned && task.isDone);
    this.plannedAndDoneTasks = allTasks.filter((task) => task.isPlanned && task.isDone);
    this.plannedTasks = allTasks.filter((task) => task.isPlanned && !task.isDone);
  }
}
