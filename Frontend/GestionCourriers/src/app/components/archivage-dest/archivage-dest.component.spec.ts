import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchivageDestComponent } from './archivage-dest.component';

describe('ArchivageDestComponent', () => {
  let component: ArchivageDestComponent;
  let fixture: ComponentFixture<ArchivageDestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArchivageDestComponent]
    });
    fixture = TestBed.createComponent(ArchivageDestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
