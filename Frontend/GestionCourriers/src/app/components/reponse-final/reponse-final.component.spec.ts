import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReponseFinalComponent } from './reponse-final.component';

describe('ReponseFinalComponent', () => {
  let component: ReponseFinalComponent;
  let fixture: ComponentFixture<ReponseFinalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReponseFinalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReponseFinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
