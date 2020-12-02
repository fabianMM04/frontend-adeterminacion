import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResolucionesformComponent } from './resolucionesform.component';

describe('ResolucionesformComponent', () => {
  let component: ResolucionesformComponent;
  let fixture: ComponentFixture<ResolucionesformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResolucionesformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResolucionesformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
