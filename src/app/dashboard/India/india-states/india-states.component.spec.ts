import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndiaStatesComponent } from './india-states.component';

describe('IndiaStatesComponent', () => {
  let component: IndiaStatesComponent;
  let fixture: ComponentFixture<IndiaStatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndiaStatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndiaStatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
