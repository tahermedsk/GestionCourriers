import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendCourrierComponent } from './send-courrier.component';

describe('SendCourrierComponent', () => {
  let component: SendCourrierComponent;
  let fixture: ComponentFixture<SendCourrierComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SendCourrierComponent]
    });
    fixture = TestBed.createComponent(SendCourrierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
