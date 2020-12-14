import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NmensajeriaComponent } from './nmensajeria.component';

describe('NmensajeriaComponent', () => {
  let component: NmensajeriaComponent;
  let fixture: ComponentFixture<NmensajeriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NmensajeriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NmensajeriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
