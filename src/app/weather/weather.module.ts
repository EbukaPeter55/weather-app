import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeatherRoutingModule } from './weather-routing.module';
import { WeatherComponent } from './weather/weather.component';
import { WeatherCityTwoComponent } from './weather-city-two/weather-city-two.component';
import { WeatherCityThreeComponent } from './weather-city-three/weather-city-three.component';
import { WeatherThreeResolver } from '../resolvers/weather-three.resolver';
import { WeatherHomeComponent } from './weather-home/weather-home.component';


@NgModule({
  declarations: [
    WeatherComponent,
    WeatherCityTwoComponent,
    WeatherCityThreeComponent,
    WeatherHomeComponent
  ],
  imports: [
    CommonModule,
    WeatherRoutingModule
  ],
  providers: [
    WeatherThreeResolver

  ]
})
export class WeatherModule { }
