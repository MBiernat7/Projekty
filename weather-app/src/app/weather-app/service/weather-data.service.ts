import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Subject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class WeatherDataService {

  weatherSource = new Subject<object>();

  serviceUrl = 'https://api.openweathermap.org/data/2.5/weather';
  apiKey = '2064fc1c307c6eeb52202e5f860ea270';

  constructor(private http: HttpClient) { }

  getWeatherDataByCity(city: string) {
    let params = new HttpParams().set('q', city).set('units', 'metric').set('appid', this.apiKey)

    return this.http.get(this.serviceUrl, {params});
  }

  getWeatherDataByCords(lat: string, lon: string) {
    let params = new HttpParams().set('lat', lat).set('lon', lon).set('units', 'metric').set('appid', this.apiKey);

    return this.http.get(this.serviceUrl, {params})
  }

  getIcon(icon: string) {
    return 'http://openweathermap.org/img/w/' + icon + '.png';
  }

  setWeatherData(weather: object) {
    this.weatherSource.next(weather);
  }
}
