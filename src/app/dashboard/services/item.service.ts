import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';
import { Items } from '../models/items';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private _itemUrl = 'https://fortnite-public-api.theapinetwork.com/prod09/items/list';

  constructor(private _http: HttpClient) { }

  getItems(): Observable<Items[]> {
    return this._http.get<Items[]>(this._itemUrl);
  }

}
