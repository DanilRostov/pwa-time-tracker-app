import { 
  Component,
  Input,
} from '@angular/core';
import { 
  Task, 
  DoneData,
} from 'src/app/dashboard/models/tasks';
import { Store } from '@ngrx/store';
import { 
  UpdateTask, 
  DeleteTask,
} from 'src/app/dashboard/actions/tasks.actions';
import { State } from 'src/app/dashboard/reducers/days.reducer';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {
  @Input() public task: Task;

  constructor(
    private store: Store<State>,
  ) { }

  public onDoneClick(doneData: DoneData) {
    this.store.dispatch(new UpdateTask({
      ...this.task,
      isDone: doneData.isDone,
    }));
  }

  public onRemoveClick() {
    this.store.dispatch(new DeleteTask({
      dayId: this.task.dayId,
      id: this.task.id,
    }));
  }
}
