import { TestBed } from '@angular/core/testing';

import { TrainconfigService } from './trainconfig.service';

describe('TrainconfigService', () => {
  let service: TrainconfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrainconfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
