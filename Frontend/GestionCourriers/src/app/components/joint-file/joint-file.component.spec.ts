import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JointFileComponent } from './joint-file.component';

describe('JointFileComponent', () => {
  let component: JointFileComponent;
  let fixture: ComponentFixture<JointFileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JointFileComponent]
    });
    fixture = TestBed.createComponent(JointFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
