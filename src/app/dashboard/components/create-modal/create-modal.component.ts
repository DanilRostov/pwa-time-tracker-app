import { 
  Component, 
  OnInit, 
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { CreateTaskData } from 'src/app/dashboard/models/tasks';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-create-modal',
  templateUrl: './create-modal.component.html',
  styleUrls: ['./create-modal.component.scss']
})
export class CreateModalComponent implements OnInit {
  @Input() public isVisible: boolean;
  @Input() public taskData: CreateTaskData;
  @Output() public cancelClick = new EventEmitter<boolean>();
  @Output() public createClick = new EventEmitter<CreateTaskData>();

  public title = new FormControl('');
  public prefix = new FormControl('');
  public estimation = new FormControl('');

  public ngOnInit() {
    this.title.setValue(this.taskData.title);
  }

  public onCreateClick() {
    const taskData = {
      ...this.taskData,
      title: this.title.value,
      prefix: this.prefix.value,
      estimation: this.estimation.value,
    }
    this.createClick.emit(taskData);
  }

  public onCancelClick() {
    this.cancelClick.emit(false);
  }

  public resetData() {
    this.title.setValue('');
    this.prefix.setValue('');
    this.estimation.setValue('');
  }
}
