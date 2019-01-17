import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private eng_location_url = 'https://www.metaweather.com/api/location/24554868/';

  private eng_location_details_url = 'https://www.metaweather.com/api/location/';

  constructor(private _http: HttpClient) { }

  getEngland() {
    return this._http.get(this.eng_location_url).pipe(data => data);
  }

  getEnglandLocationDetails(id) {
    return this._http.get(this.eng_location_details_url + id);
  }

}
