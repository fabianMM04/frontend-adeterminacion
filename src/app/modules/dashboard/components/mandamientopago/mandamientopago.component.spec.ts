import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MandamientopagoComponent } from './mandamientopago.component';

describe('MandamientopagoComponent', () => {
  let component: MandamientopagoComponent;
  let fixture: ComponentFixture<MandamientopagoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MandamientopagoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MandamientopagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
