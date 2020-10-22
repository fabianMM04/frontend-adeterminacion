import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SabogadoComponent } from './sabogado.component';

describe('SabogadoComponent', () => {
  let component: SabogadoComponent;
  let fixture: ComponentFixture<SabogadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SabogadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SabogadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
