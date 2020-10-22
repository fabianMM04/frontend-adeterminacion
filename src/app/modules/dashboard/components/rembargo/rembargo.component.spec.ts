import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RembargoComponent } from './rembargo.component';

describe('RembargoComponent', () => {
  let component: RembargoComponent;
  let fixture: ComponentFixture<RembargoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RembargoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RembargoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
