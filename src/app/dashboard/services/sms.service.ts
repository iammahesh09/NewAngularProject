import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SmsService {

  private _teacher = new Subject<any>();
  private _student = new Subject<any>();

  constructor() { }

  getTeacherSMS(): Observable<any> {
    return this._teacher.asObservable();
  }

  sendTeacherSMS(T_SMS: any) {
    this._teacher.next(T_SMS);
  }

  getStudentSMS(): Observable<any> {
    return this._student.asObservable();
  }

  sendStudentSMS(S_SMS: any) {
    this._student.next(S_SMS);
  }


}
