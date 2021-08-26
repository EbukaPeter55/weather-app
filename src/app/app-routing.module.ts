import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherHomeComponent } from './weather/weather-home/weather-home.component';

const routes: Routes = [
  // Lazy load the Weather module to improve performance
  {
    path: "weather", 
  loadChildren: ()=> import('./weather/weather.module').then(m => m.WeatherModule)  
},
{ path: '', redirectTo: 'weather/weather-home', pathMatch: 'full' },
// Redirect any unknown route to the default weather home page
{ path: '**', component: WeatherHomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
