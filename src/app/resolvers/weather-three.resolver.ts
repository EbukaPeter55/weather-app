import {Injectable} from '@angular/core';
import {Resolve, Router, ActivatedRouteSnapshot} from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { WeatherService } from '../services/weather.service';
import { Weather } from '../models/weather-model';

@Injectable()
export class WeatherThreeResolver implements Resolve<Weather> {
   

    constructor(private weatherservice: WeatherService, private router: Router,
        ) {}

    resolve(): Observable<Weather> {
        return this.weatherservice.getWeatherThreeData().pipe(
            catchError(error => {
                alert('Problem retrieving data');
             //   this.router.navigate(['/home']);
                return of(null);
            })
        );
    }
}
