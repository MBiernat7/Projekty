import { Component, OnInit } from '@angular/core';
import { WeatherApiResponse } from '../interfaces/weather';
import { WeatherDataService } from '../service/weather-data.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  lon: any;
  lat: any;
  weather: any = {
    name: '',
    temperature: 0,
    temp_min: 0,
    temp_max: 0,
    description: '',
    humidity: 0,
    pressure: 0,
    icon: ''
  };


  constructor(private weatherData: WeatherDataService) { }

  ngOnInit(): void {
    this.weatherData.weatherSource.subscribe((weather: WeatherApiResponse) => {
      this.weather.name = weather.name;
      this.weather.date = weather.dt;
      this.weather.temperature = Math.round(weather.main.temp);
      this.weather.temp_min = Math.round(weather.main.temp_min);
      this.weather.temp_max = Math.round(weather.main.temp_max);
      this.weather.description = weather.weather[0].description;
      this.weather.humidity = weather.main.humidity;
      this.weather.pressure = weather.main.pressure;
      this.weather.icon = this.weatherData.getIcon(weather.weather[0].icon);
    });
  }

}
