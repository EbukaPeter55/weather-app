import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherComponent } from './weather/weather.component';
import { WeatherCityTwoComponent } from './weather-city-two/weather-city-two.component';
import { WeatherCityThreeComponent } from './weather-city-three/weather-city-three.component';
import { WeatherThreeResolver } from '../resolvers/weather-three.resolver';
import { WeatherHomeComponent } from './weather-home/weather-home.component';


const routes: Routes = [
 { path: 'weather-home', component: WeatherHomeComponent }, 
 { path: 'weather-view', component: WeatherComponent },
 { path: 'weather-city-two', component: WeatherCityTwoComponent },
 { path: 'weather-city-three', component: WeatherCityThreeComponent,
 resolve: {weather: WeatherThreeResolver} }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WeatherRoutingModule { }
