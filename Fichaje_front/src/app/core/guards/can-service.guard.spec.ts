import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { canServiceGuard } from './can-service.guard';

describe('canServiceGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => canServiceGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
