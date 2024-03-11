import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCourrierArriveComponent } from './list-courrier-arrive.component';

describe('ListCourrierArriveComponent', () => {
  let component: ListCourrierArriveComponent;
  let fixture: ComponentFixture<ListCourrierArriveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListCourrierArriveComponent]
    });
    fixture = TestBed.createComponent(ListCourrierArriveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
