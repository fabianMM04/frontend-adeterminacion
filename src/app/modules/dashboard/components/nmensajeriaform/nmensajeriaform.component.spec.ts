import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NmensajeriaformComponent } from './nmensajeriaform.component';

describe('NmensajeriaformComponent', () => {
  let component: NmensajeriaformComponent;
  let fixture: ComponentFixture<NmensajeriaformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NmensajeriaformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NmensajeriaformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
