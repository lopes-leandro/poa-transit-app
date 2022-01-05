import { TestBed } from '@angular/core/testing';

import { MobilidadeService } from './mobilidade.service';

describe('MobilidadeService', () => {
  let service: MobilidadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MobilidadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
