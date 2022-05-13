import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricoseisonceComponent } from './historicoseisonce.component';

describe('HistoricoseisonceComponent', () => {
  let component: HistoricoseisonceComponent;
  let fixture: ComponentFixture<HistoricoseisonceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoricoseisonceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoricoseisonceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
