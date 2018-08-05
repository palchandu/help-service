import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainBetweenComponent } from './train-between.component';

describe('TrainBetweenComponent', () => {
  let component: TrainBetweenComponent;
  let fixture: ComponentFixture<TrainBetweenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainBetweenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainBetweenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
