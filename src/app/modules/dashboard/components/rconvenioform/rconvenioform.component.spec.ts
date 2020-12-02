import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RconvenioformComponent } from './rconvenioform.component';

describe('RconvenioformComponent', () => {
  let component: RconvenioformComponent;
  let fixture: ComponentFixture<RconvenioformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RconvenioformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RconvenioformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
