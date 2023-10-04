import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricoseisonceformComponent } from './historicoseisonceform.component';

describe('HistoricoseisonceformComponent', () => {
  let component: HistoricoseisonceformComponent;
  let fixture: ComponentFixture<HistoricoseisonceformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoricoseisonceformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoricoseisonceformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
