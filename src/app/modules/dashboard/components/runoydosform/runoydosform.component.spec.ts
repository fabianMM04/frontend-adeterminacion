import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RunoydosformComponent } from './runoydosform.component';

describe('RunoydosformComponent', () => {
  let component: RunoydosformComponent;
  let fixture: ComponentFixture<RunoydosformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RunoydosformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RunoydosformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
