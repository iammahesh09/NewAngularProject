import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {

  private _menuSubject = new Subject<any>();

  newsData: any = {}
  private _newsBehaviorSubject = new BehaviorSubject(this.newsData);
  currentNewsData = this._newsBehaviorSubject.asObservable();

  constructor() { }

  sendMessage(message: any) {
    this._menuSubject.next(message);
  }

  getMessage(): Observable<any> {
    return this._menuSubject.asObservable();
  }


  createObsevable(): Observable<Date> {
    return new Observable(
      observer => {   // 3
        setInterval(() =>
          observer.next(new Date())  // 4
          , 1000);
      }
    )
  }

  getNewsDetails(data: any) {
    this._newsBehaviorSubject.next(data)
  }


}
