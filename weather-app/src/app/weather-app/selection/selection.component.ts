import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { WeatherApiResponse } from '../interfaces/weather';
import { WeatherDataService } from '../service/weather-data.service';

@Component({
  selector: 'app-selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.css']
})
export class SelectionComponent implements OnInit {

  lon: any;
  lat: any;

  selectForm = new FormGroup({
    city: new FormControl('', [Validators.minLength(2), Validators.required])
  });

  constructor(private weatherData: WeatherDataService) { }

  ngOnInit(): void {
    navigator.geolocation.getCurrentPosition((position) => {
      (this.lat = position.coords.latitude, this.lon = position.coords.longitude);
    });
  }

  getCity(city: string) {
    this.weatherData.getWeatherDataByCity(city).subscribe(data => {
      this.weatherData.setWeatherData(data as WeatherApiResponse);
    });
  }

  getLocation() {
    console.log(this.lat, this.lon)
    this.weatherData.getWeatherDataByCords(this.lat, this.lon).subscribe(data => {
      this.weatherData.setWeatherData(data as WeatherApiResponse);
    })
  }

}
