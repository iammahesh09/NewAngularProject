import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormsService {

  private _formSubject = new Subject<any>();
  constructor() { }

  getTitle() {
    return this._formSubject.asObservable();
  }

  sendTitle(msg) {
    this._formSubject.next(msg);
  }

}
