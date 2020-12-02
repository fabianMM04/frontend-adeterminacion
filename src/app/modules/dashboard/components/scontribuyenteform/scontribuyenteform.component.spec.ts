import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScontribuyenteformComponent } from './scontribuyenteform.component';

describe('ScontribuyenteformComponent', () => {
  let component: ScontribuyenteformComponent;
  let fixture: ComponentFixture<ScontribuyenteformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScontribuyenteformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScontribuyenteformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
