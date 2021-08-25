import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeatherRoutingModule } from './weather-routing.module';
import { WeatherComponent } from './weather/weather.component';
import { WeatherCityTwoComponent } from './weather-city-two/weather-city-two.component';


@NgModule({
  declarations: [
    WeatherComponent,
    WeatherCityTwoComponent
  ],
  imports: [
    CommonModule,
    WeatherRoutingModule
  ]
})
export class WeatherModule { }
