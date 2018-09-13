import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WeatherProvider } from '../../providers/weather/weather';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  weather: any;
  value:string;
  city: string;
  temp: number;
  description: string;
  humidity: string;
  windSpeed: string;
  wind: string;
  main: string;
  date: number;



  constructor(public navCtrl: NavController, private weatherp: WeatherProvider) {
  }

  getWeather(cvalue:any) {

    this.weatherp.getWeather(this.city).subscribe(results => {
      this.weather = results;
      this.main = this.weather.weather[0].main;
      this.humidity=this.weather.main.humidity;
      this.temp = this.weather.main.temp-273.15;
      this.wind = this.weather.wind.speed;
      this.description = this.weather.weather[0].description;
      this.date = this.weather.dt
      console.log("response", results)


    });
  }
}



