import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MandamientopagoformComponent } from './mandamientopagoform.component';

describe('MandamientopagoformComponent', () => {
  let component: MandamientopagoformComponent;
  let fixture: ComponentFixture<MandamientopagoformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MandamientopagoformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MandamientopagoformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
