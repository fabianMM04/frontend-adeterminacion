import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RconvenioComponent } from './rconvenio.component';

describe('RconvenioComponent', () => {
  let component: RconvenioComponent;
  let fixture: ComponentFixture<RconvenioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RconvenioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RconvenioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
