import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { WeatherApiResponse } from '../interfaces/weather';


@Injectable({
  providedIn: 'root'
})
export class WeatherDataService {

  weatherSource = new Subject<WeatherApiResponse>();

  serviceUrl = environment.weatherApi.apiURL;
  apiKey = environment.weatherApi.key;

  constructor(private http: HttpClient) { }

  getWeatherDataByCity(city: string) {
    let params = new HttpParams().set('q', city).set('units', 'metric').set('appid', this.apiKey)

    return this.http.get(this.serviceUrl, { params });
  }

  getWeatherDataByCords(lat: string, lon: string) {
    let params = new HttpParams().set('lat', lat).set('lon', lon).set('units', 'metric').set('appid', this.apiKey);

    return this.http.get(this.serviceUrl, { params })
  }

  getIcon(icon: string) {
    return 'https://openweathermap.org/img/wn/' + icon + '.png';
  }

  setWeatherData(weather: WeatherApiResponse) {
    this.weatherSource.next(weather);
  }
}
