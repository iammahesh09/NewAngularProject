import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private _newsUrl = './assets/news.json';
  constructor(private _http: HttpClient) { }

  getNews() {
    return this._http.get(this._newsUrl);
  }

}
