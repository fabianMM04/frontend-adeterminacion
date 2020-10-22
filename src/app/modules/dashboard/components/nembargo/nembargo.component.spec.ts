import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NembargoComponent } from './nembargo.component';

describe('NembargoComponent', () => {
  let component: NembargoComponent;
  let fixture: ComponentFixture<NembargoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NembargoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NembargoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
