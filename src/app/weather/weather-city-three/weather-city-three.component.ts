import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-weather-city-three',
  templateUrl: './weather-city-three.component.html',
  styleUrls: ['./weather-city-three.component.scss']
})
export class WeatherCityThreeComponent implements OnInit {
  public weatherData:any;
  public nameOfCity:any;
  public temperature:any;
  public windSpeed:any;
  public image:any;
  public tempCelcius:any;
  public subscription;

  constructor(public router: Router, public route: ActivatedRoute) { }

  ngOnInit(): void {
 this.subscription = this.route.data.subscribe(data => {
    console.log(data);
    this.weatherData = data.weather;
   // Get the name of city
   this.nameOfCity = this.weatherData.name;
   console.log(this.nameOfCity);
   
   // Get the temperature
   this.temperature = this.weatherData.main.temp;
   console.log(this.temperature);
   // Convert to celsius
   this.tempCelcius = (this.temperature - 273.15).toFixed(0);
   console.log(this.tempCelcius);
   
   // Get Winspeed
   this.windSpeed = this.weatherData.wind.speed;
   console.log(this.windSpeed);
   this.image = this.weatherData.weather[0].icon;
   console.log(this.image);
   

    
  })
  }

  // Unsubscribe the subscription in the ngOndestroy lifecycle hook to prevent memory leak
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
