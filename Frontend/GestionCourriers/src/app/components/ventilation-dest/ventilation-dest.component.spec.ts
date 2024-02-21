import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentilationDestComponent } from './ventilation-dest.component';

describe('VentilationDestComponent', () => {
  let component: VentilationDestComponent;
  let fixture: ComponentFixture<VentilationDestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VentilationDestComponent]
    });
    fixture = TestBed.createComponent(VentilationDestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
