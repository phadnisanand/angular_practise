import { TestBed } from '@angular/core/testing';

import { TestAuthGuard } from './test-auth.guard';

describe('TestAuthGuard', () => {
  let guard: TestAuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(TestAuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
