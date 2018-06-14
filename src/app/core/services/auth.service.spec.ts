import { TestBed, inject } from '@angular/core/testing';

import { AuthDefaultService } from './auth-default.service';

describe('AuthDefaultService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthDefaultService]
    });
  });

  it('should be created', inject([AuthDefaultService], (service: AuthDefaultService) => {
    expect(service).toBeTruthy();
  }));
});
