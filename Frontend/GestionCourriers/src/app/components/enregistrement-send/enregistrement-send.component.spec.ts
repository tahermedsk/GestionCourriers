import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnregistrementSendComponent } from './enregistrement-send.component';

describe('EnregistrementSendComponent', () => {
  let component: EnregistrementSendComponent;
  let fixture: ComponentFixture<EnregistrementSendComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnregistrementSendComponent]
    });
    fixture = TestBed.createComponent(EnregistrementSendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
