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
import { DoneData } from 'src/app/dashboard/models/tasks';

@Component({
  selector: 'app-done-btn',
  templateUrl: './done-btn.component.html',
  styleUrls: ['./done-btn.component.scss']
})
export class DoneBtnComponent implements OnInit, OnDestroy {
  @Input() public isDone: boolean;
  @Input() public id: string;
  @Input() public title: string;
  @Output() public doneClick = new EventEmitter<DoneData>();
  public doneButton = new FormControl(this.isDone);
  public subscriptions = new Subscription();

  public ngOnInit() {
    this.doneButton.setValue(this.isDone);
    this.subscriptions.add(this.doneButton.valueChanges.subscribe((isDone) => {
      this.doneClick.emit({ id: this.id, isDone });
      if (isDone) {
        this.showNotification();
      }
    }));
  }

  public ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  public showNotification() {
    if (Notification.permission === 'granted') {
      navigator.serviceWorker.getRegistration().then((reg) => {
        if (reg) {
          reg.showNotification(`Task ${this.title} was done!`);
        }
      });
    }
  }
}
