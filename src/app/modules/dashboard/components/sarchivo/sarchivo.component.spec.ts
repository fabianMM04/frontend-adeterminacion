import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SarchivoComponent } from './sarchivo.component';

describe('SarchivoComponent', () => {
  let component: SarchivoComponent;
  let fixture: ComponentFixture<SarchivoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SarchivoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SarchivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
