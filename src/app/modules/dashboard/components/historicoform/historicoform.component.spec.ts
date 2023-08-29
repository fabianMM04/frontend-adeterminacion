import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricoformComponent } from './historicoform.component';

describe('HistoricoformComponent', () => {
  let component: HistoricoformComponent;
  let fixture: ComponentFixture<HistoricoformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoricoformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoricoformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
