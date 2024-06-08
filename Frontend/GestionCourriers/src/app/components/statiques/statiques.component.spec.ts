import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatiquesComponent } from './statiques.component';

describe('StatiquesComponent', () => {
  let component: StatiquesComponent;
  let fixture: ComponentFixture<StatiquesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StatiquesComponent]
    });
    fixture = TestBed.createComponent(StatiquesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
