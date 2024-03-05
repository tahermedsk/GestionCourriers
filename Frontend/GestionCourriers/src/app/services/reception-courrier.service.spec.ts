import { TestBed } from '@angular/core/testing';

import { ReceptionCourrierService } from './reception-courrier.service';

describe('ReceptionCourrierService', () => {
  let service: ReceptionCourrierService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReceptionCourrierService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
