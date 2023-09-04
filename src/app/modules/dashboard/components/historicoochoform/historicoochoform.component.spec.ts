import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricoochoformComponent } from './historicoochoform.component';

describe('HistoricoochoformComponent', () => {
  let component: HistoricoochoformComponent;
  let fixture: ComponentFixture<HistoricoochoformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoricoochoformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoricoochoformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
