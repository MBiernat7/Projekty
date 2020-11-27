import { Component, OnInit } from '@angular/core';
import { WeatherDataService } from '../service/weather-data.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  lon: any;
  lat: any;
  weather: any;


  constructor(private weatherData: WeatherDataService) { }

  ngOnInit(): void {
    this.weatherData.weatherSource.subscribe((weather: Object) => this.weather = weather);
  }

}
