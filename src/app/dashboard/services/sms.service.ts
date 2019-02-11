import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SmsService {

  private _teacher = new Subject<any>();
  private _student = new Subject<any>();

  constructor() { }

  getSMS(): Observable<any> {
    return this._teacher.asObservable();
  }

  sendSMS(T_SMS: any) {
    this._teacher.next(T_SMS);
  }


}
