import { 
  Component, 
  Output, 
  EventEmitter,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { CreateTaskData } from 'src/app/models/tasks';

@Component({
  selector: 'app-create-btn',
  templateUrl: './create-btn.component.html',
  styleUrls: ['./create-btn.component.scss']
})
export class CreateBtnComponent {
  public title = new FormControl('');
  public isCreateModalVisible: boolean;
  public taskData: CreateTaskData;
  @Output() public createClick = new EventEmitter<CreateTaskData>();

  public openCreateModal() {
    this.taskData = {
      title: this.title.value,
      prefix: null,
      estimation: null,
    }
    this.isCreateModalVisible = true;
  }

  public onCreateModalClick(taskData: CreateTaskData) {
    this.createClick.emit(taskData);
    this.resetData();
  }

  public onCancelClick(event) {
    this.isCreateModalVisible = event;
  }

  public resetData() {
    this.isCreateModalVisible = false;
    this.title.setValue('');
    window.scrollTo({
      top: document.body.clientHeight,
      behavior: "smooth"
    });
  }
}
