import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainCancelComponent } from './train-cancel.component';

describe('TrainCancelComponent', () => {
  let component: TrainCancelComponent;
  let fixture: ComponentFixture<TrainCancelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainCancelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainCancelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
