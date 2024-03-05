import { TestBed } from '@angular/core/testing';

import { TransmissionCourrierService } from './transmission-courrier.service';

describe('TransmissionCourrierService', () => {
  let service: TransmissionCourrierService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransmissionCourrierService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
