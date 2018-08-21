import { TestBed, inject } from '@angular/core/testing';

import { RailwayService } from './railway.service';

describe('RailwayService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RailwayService]
    });
  });

  it('should be created', inject([RailwayService], (service: RailwayService) => {
    expect(service).toBeTruthy();
  }));
});
