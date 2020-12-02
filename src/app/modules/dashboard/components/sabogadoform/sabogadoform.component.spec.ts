import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SabogadoformComponent } from './sabogadoform.component';

describe('SabogadoformComponent', () => {
  let component: SabogadoformComponent;
  let fixture: ComponentFixture<SabogadoformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SabogadoformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SabogadoformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
