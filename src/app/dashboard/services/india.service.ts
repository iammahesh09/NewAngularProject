import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class IndiaService {

  private _indiaUrl = 'https://raw.githubusercontent.com/sab99r/Indian-States-And-Districts/master/states-and-districts.json';

  private india_state_code_Url = './assets/india-state-code.json'

  constructor(private _http: HttpClient) { }

  getStates() {
    return this._http.get(this.india_state_code_Url);
  }

  getStateDetails(codeName) {
    return this._http.get(this.india_state_code_Url).pipe(
      map((data) => data)
    )
  }

}
