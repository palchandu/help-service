import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndianContactComponent } from './indian-contact.component';

describe('IndianContactComponent', () => {
  let component: IndianContactComponent;
  let fixture: ComponentFixture<IndianContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndianContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndianContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
