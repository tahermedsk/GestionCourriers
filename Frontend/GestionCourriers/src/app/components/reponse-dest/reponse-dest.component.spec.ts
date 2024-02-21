import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReponseDestComponent } from './reponse-dest.component';

describe('ReponseDestComponent', () => {
  let component: ReponseDestComponent;
  let fixture: ComponentFixture<ReponseDestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReponseDestComponent]
    });
    fixture = TestBed.createComponent(ReponseDestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
