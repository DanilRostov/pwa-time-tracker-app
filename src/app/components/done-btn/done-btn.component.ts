import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-done-btn',
  templateUrl: './done-btn.component.html',
  styleUrls: ['./done-btn.component.scss']
})
export class DoneBtnComponent implements OnInit {
  @Input() public isDone: boolean;
  @Input() public id: string;
  @ViewChild('input') public input: ElementRef;

  public ngOnInit() {
    this.input.nativeElement.checked = this.isDone;
  }
}
