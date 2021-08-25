import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherCityThreeComponent } from './weather-city-three.component';

describe('WeatherCityThreeComponent', () => {
  let component: WeatherCityThreeComponent;
  let fixture: ComponentFixture<WeatherCityThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherCityThreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherCityThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
