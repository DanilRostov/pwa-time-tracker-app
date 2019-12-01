import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoneBtnComponent } from './done-btn.component';

describe('DoneBtnComponent', () => {
  let component: DoneBtnComponent;
  let fixture: ComponentFixture<DoneBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoneBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoneBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
