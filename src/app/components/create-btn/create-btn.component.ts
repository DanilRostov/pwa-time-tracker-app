import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { State } from 'src/app/reducers/tasks.reducer';
import { CreateTask } from 'src/app/actions/tasks.actions';

@Component({
  selector: 'app-create-btn',
  templateUrl: './create-btn.component.html',
  styleUrls: ['./create-btn.component.scss']
})
export class CreateBtnComponent {
  public title = new FormControl('');

  constructor(
    private store: Store<State>,
  ) { }

  public onCreateClick() {
    const taskData = {
      id: 'testId',
      title: this.title.value,
      isPlanned: true,
      isDone: false,
      prefix: 'TEST',
      estimation: 0.5,
    }
    this.store.dispatch(new CreateTask(taskData));
    this.resetData();
  }

  public resetData() {
    this.title.setValue('');
    window.scrollTo({
      top: document.body.clientHeight,
      behavior: "smooth"
    });
  }
}
