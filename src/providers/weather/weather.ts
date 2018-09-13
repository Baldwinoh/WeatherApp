import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class WeatherProvider {

  url = 'https://api.openweathermap.org/data/2.5/weather?q=';
  appid='&appid=2c01491df32a6e960add2cff1de5ef34';
  
  constructor(public http: HttpClient) {
    console.log('Hello WeatherProvider Provider');


  }

  getWeather(city: string){

    return this.http.get(this.url+city+',za'+this.appid)
      
  }

}
