import { TestBed } from '@angular/core/testing';

import { DesignBlockService } from './design-block.service';

describe('DesignBlockService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DesignBlockService = TestBed.get(DesignBlockService);
    expect(service).toBeTruthy();
  });
});
