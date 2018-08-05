import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainArrivalComponent } from './train-arrival.component';

describe('TrainArrivalComponent', () => {
  let component: TrainArrivalComponent;
  let fixture: ComponentFixture<TrainArrivalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainArrivalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainArrivalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
