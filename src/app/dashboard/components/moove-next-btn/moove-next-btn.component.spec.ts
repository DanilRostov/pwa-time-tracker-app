import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MooveNextBtnComponent } from './moove-next-btn.component';

describe('MooveNextBtnComponent', () => {
  let component: MooveNextBtnComponent;
  let fixture: ComponentFixture<MooveNextBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MooveNextBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MooveNextBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
