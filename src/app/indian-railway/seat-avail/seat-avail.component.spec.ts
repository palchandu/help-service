import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeatAvailComponent } from './seat-avail.component';

describe('SeatAvailComponent', () => {
  let component: SeatAvailComponent;
  let fixture: ComponentFixture<SeatAvailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeatAvailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeatAvailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
