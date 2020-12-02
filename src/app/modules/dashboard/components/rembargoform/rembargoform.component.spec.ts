import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RembargoformComponent } from './rembargoform.component';

describe('RembargoformComponent', () => {
  let component: RembargoformComponent;
  let fixture: ComponentFixture<RembargoformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RembargoformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RembargoformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
