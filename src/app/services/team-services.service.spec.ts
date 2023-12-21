import { TestBed } from '@angular/core/testing';

import { TeamServicesService } from './team-services.service';

describe('TeamServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TeamServicesService = TestBed.get(TeamServicesService);
    expect(service).toBeTruthy();
  });
});
