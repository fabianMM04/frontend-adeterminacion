import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NembargoformComponent } from './nembargoform.component';

describe('NembargoformComponent', () => {
  let component: NembargoformComponent;
  let fixture: ComponentFixture<NembargoformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NembargoformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NembargoformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
