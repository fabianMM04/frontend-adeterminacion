import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricoochoComponent } from './historicoocho.component';

describe('HistoricoochoComponent', () => {
  let component: HistoricoochoComponent;
  let fixture: ComponentFixture<HistoricoochoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoricoochoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoricoochoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
