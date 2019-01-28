import { Component, OnInit } from '@angular/core';
import { SmsService } from '../../services/sms.service';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {
  teacherMsg: any;
  constructor(private _smsService: SmsService) { }

  ngOnInit() {
  }

  teacherSMS(msg) {
    this._smsService.sendTeacherSMS(msg);
    this.teacherMsg = '';
  }

}
