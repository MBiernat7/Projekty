export interface Weather {
  id:number;
  main: string;
  description: string;
  icon: string;
}

export interface WeatherApiResponse {
  base: string;
  clouds: {
    all: number
  };
  coord: {
    lon: number;
    lat: number;
  };
  cod: number;
  dt: number;
  id: number;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  name: string;
  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  visibility: number;
  weather: Weather[];
  wind: {
    speed: number;
    def: number;
  }
}
