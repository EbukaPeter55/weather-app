import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Weather } from '../models/weather-model';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  public domainProtocol = 'https://';
  public domainName = 'api.openweathermap.org/data/2.5/weather?q=';
  public weather;

  constructor(public http: HttpClient) { }

  // Method to communicate with the API for London using a HTTP request
  getWeatherData(): Observable<Weather>{
    return this.http.get<Weather>(this.domainProtocol 
      + this.domainName + 'London&appid=f28225e651ce459aa65dcad0b3d6ed2d');
  }

  //  Method to communicate with the second API for Mumbai City via a HTTP request
  getWeatherTwoData(): Observable<Weather>{
    return this.http.get<Weather>(this.domainProtocol + this.domainName 
      + 'mumbai&appid=f28225e651ce459aa65dcad0b3d6ed2d');
  }

  //  Method to communicate with the third API for Chicago City via a HTTP request
  getWeatherThreeData(): Observable<Weather>{
    return this.http.get<Weather>(this.domainProtocol + this.domainName 
      + 'chicago&appid=f28225e651ce459aa65dcad0b3d6ed2d');
  }


}

