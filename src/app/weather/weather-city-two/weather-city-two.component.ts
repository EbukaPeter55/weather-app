import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-weather-city-two',
  templateUrl: './weather-city-two.component.html',
  styleUrls: ['./weather-city-two.component.scss']
})
export class WeatherCityTwoComponent implements OnInit {
  public weatherData:any;
  public nameOfCity:any;
  public temperature:any;
  public windSpeed:any;
  public image:any;
  public tempCelcius:any;
  public subscription;

  constructor(public weatherservice: WeatherService) { }

  ngOnInit(): void {
  //  Call the observable from the service and subscribe to it to get data 
  this.subscription = this.weatherservice.getWeatherTwoData().subscribe
  (data => {
    console.log(data);
    this.weatherData = data;
   // Get the name of city
   this.nameOfCity = this.weatherData.name;
   console.log(this.nameOfCity);
   
   // Get the temperature
   this.temperature = this.weatherData.main.temp;
   console.log(this.temperature);
   // Convert to celsius
   this.tempCelcius = (this.temperature - 273.15).toFixed(0);
   console.log(this.tempCelcius);
   
   // Get Windspeed
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
