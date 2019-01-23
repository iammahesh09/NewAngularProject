import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherSpecsComponent } from './weather-specs.component';

describe('WeatherSpecsComponent', () => {
  let component: WeatherSpecsComponent;
  let fixture: ComponentFixture<WeatherSpecsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherSpecsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherSpecsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
