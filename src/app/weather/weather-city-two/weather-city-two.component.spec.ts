import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherCityTwoComponent } from './weather-city-two.component';

describe('WeatherCityTwoComponent', () => {
  let component: WeatherCityTwoComponent;
  let fixture: ComponentFixture<WeatherCityTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherCityTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherCityTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
