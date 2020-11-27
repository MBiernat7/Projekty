import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { WeatherDataService } from '../service/weather-data.service';

@Component({
  selector: 'app-selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.css']
})
export class SelectionComponent implements OnInit {

  weather: object = {};

  selectForm = new FormGroup({
    city: new FormControl('', [Validators.minLength(2), Validators.required])
  });

  constructor(private weatherData: WeatherDataService) { }

  ngOnInit(): void {
  }

  getCity(city: string) {
    this.weatherData.getWeatherDataByCity(city).subscribe(data => this.weather = data);

    this.weatherData.setWeatherData(this.weather);
  }

}
