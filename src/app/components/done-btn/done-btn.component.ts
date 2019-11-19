import {
  Component,
  OnInit,
  Input,
  EventEmitter,
  Output,
  OnDestroy,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { DoneData } from 'src/app/models/tasks';

@Component({
  selector: 'app-done-btn',
  templateUrl: './done-btn.component.html',
  styleUrls: ['./done-btn.component.scss']
})
export class DoneBtnComponent implements OnInit, OnDestroy {
  @Input() public isDone: boolean;
  @Input() public id: string;
  @Output() public doneClick = new EventEmitter<DoneData>();
  public doneButton = new FormControl(this.isDone);
  public subscriptions = new Subscription();

  public ngOnInit() {
    this.doneButton.setValue(this.isDone);
    this.subscriptions.add(this.doneButton.valueChanges.subscribe((isDone) => {
      this.doneClick.emit({ id: this.id, isDone });
    }));
  }

  public ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
