import { Component, OnInit } from '@angular/core';
import { SmsService } from '../../services/sms.service';
import { SMS } from '../sms.model';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {
  teacherMsg: SMS = {
    name: '',
    message: ''
  };
  constructor(private _smsService: SmsService) { }

  ngOnInit() {
  }

  teacherSMS(msg) {
    this.teacherMsg = {
      name: 'Teacher',
      message: msg
    }
    this._smsService.sendSMS(this.teacherMsg);
  }

}
