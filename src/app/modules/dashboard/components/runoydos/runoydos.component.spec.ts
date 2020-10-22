import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RunoydosComponent } from './runoydos.component';

describe('RunoydosComponent', () => {
  let component: RunoydosComponent;
  let fixture: ComponentFixture<RunoydosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RunoydosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RunoydosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
