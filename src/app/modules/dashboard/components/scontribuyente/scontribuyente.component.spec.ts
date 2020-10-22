import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScontribuyenteComponent } from './scontribuyente.component';

describe('ScontribuyenteComponent', () => {
  let component: ScontribuyenteComponent;
  let fixture: ComponentFixture<ScontribuyenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScontribuyenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScontribuyenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
