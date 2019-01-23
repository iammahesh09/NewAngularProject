import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherParentComponent } from './weather-parent.component';

describe('WeatherParentComponent', () => {
  let component: WeatherParentComponent;
  let fixture: ComponentFixture<WeatherParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
