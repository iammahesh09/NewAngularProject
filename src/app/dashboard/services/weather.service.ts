import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private eng_location_url = 'https://www.metaweather.com/api/location/24554868/';

  private eng_location_details_url = 'https://www.metaweather.com/api/location/';

  private itemUrl = 'https://fortnite-public-api.theapinetwork.com/prod09/upcoming/get';


  constructor(private _http: HttpClient) { }

  getEngland() {
    return this._http.get(this.eng_location_url).pipe(data => data);
  }

  getEnglandLocationDetails(id) {
    return this._http.get(this.eng_location_details_url + id);
  }

  getItem() {
    return this._http.get(this.itemUrl).pipe(
      map(res => res['items'])
    );
  }




}
