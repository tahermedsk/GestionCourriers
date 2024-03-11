import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCourrierDepartComponent } from './list-courrier-depart.component';

describe('ListCourrierDepartComponent', () => {
  let component: ListCourrierDepartComponent;
  let fixture: ComponentFixture<ListCourrierDepartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListCourrierDepartComponent]
    });
    fixture = TestBed.createComponent(ListCourrierDepartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
