import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnregistrementDestComponent } from './enregistrement-dest.component';

describe('EnregistrementDestComponent', () => {
  let component: EnregistrementDestComponent;
  let fixture: ComponentFixture<EnregistrementDestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnregistrementDestComponent]
    });
    fixture = TestBed.createComponent(EnregistrementDestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
