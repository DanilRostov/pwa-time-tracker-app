import { 
  Component, 
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-remove-btn',
  templateUrl: './remove-btn.component.html',
  styleUrls: ['./remove-btn.component.scss']
})
export class RemoveBtnComponent {
  @Output() public removeClick = new EventEmitter();

  public onRemoveClick() {
    this.removeClick.emit();
  }

}
