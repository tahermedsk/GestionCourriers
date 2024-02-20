import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestCourrierComponent } from './dest-courrier.component';

describe('DestCourrierComponent', () => {
  let component: DestCourrierComponent;
  let fixture: ComponentFixture<DestCourrierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DestCourrierComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DestCourrierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
