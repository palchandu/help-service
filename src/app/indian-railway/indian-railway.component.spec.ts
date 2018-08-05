import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndianRailwayComponent } from './indian-railway.component';

describe('IndianRailwayComponent', () => {
  let component: IndianRailwayComponent;
  let fixture: ComponentFixture<IndianRailwayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndianRailwayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndianRailwayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
