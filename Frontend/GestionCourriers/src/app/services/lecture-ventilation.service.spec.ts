import { TestBed } from '@angular/core/testing';

import { LectureVentilationService } from './lecture-ventilation.service';

describe('LectureVentilationService', () => {
  let service: LectureVentilationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LectureVentilationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
