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
  public sunset_time:any;
  public isDay:any;

  constructor(public router: Router, public route: ActivatedRoute) { }

  ngOnInit(): void {
 this.subscription = this.route.data.subscribe(data => {
    // console.log(data);
    this.weatherData = data.weather;
   // Get the name of city
   this.nameOfCity = this.weatherData.name;
   
   // Get the temperature
   this.temperature = this.weatherData.main.temp;
   // Convert to celsius
   this.tempCelcius = (this.temperature - 273.15).toFixed(0);
   
   // Get Winspeed
   this.windSpeed = this.weatherData.wind.speed;
   this.image = this.weatherData.weather[0].icon;
   
   //Set weather data  
   let timeForSunset = new Date(this.weatherData.sys.sunset * 1000);
   this.sunset_time = timeForSunset.toLocaleTimeString();
   // Check whether it is day or night time
   let currentDate = new Date();
   this.isDay = (currentDate.getTime() < timeForSunset.getTime());
    
  });

  }

  // Unsubscribe the subscription in the ngOndestroy lifecycle hook to prevent memory leak
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
