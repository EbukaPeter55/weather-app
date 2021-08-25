import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherComponent } from './weather/weather.component';
import { WeatherCityTwoComponent } from './weather-city-two/weather-city-two.component';


const routes: Routes = [
 { path: 'weather-view', component: WeatherComponent },
 { path: 'weather-city-two', component: WeatherCityTwoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WeatherRoutingModule { }
