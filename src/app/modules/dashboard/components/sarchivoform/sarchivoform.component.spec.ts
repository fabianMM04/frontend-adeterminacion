import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SarchivoformComponent } from './sarchivoform.component';

describe('SarchivoformComponent', () => {
  let component: SarchivoformComponent;
  let fixture: ComponentFixture<SarchivoformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SarchivoformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SarchivoformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
