import { TestBed } from '@angular/core/testing';

import { MatchServicesService } from './match-services.service';

describe('MatchServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MatchServicesService = TestBed.get(MatchServicesService);
    expect(service).toBeTruthy();
  });
});
