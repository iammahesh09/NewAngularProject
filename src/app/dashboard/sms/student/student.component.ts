import { Component, OnInit } from '@angular/core';
import { SmsService } from '../../services/sms.service';
import { SMS } from '../sms.model';


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  studentMsg: SMS = {
    name: '',
    message: ''
  };

  constructor(private _smsService: SmsService) { }

  ngOnInit() {
  }

  studentSMS(msg) {
    this.studentMsg = {
      name: 'Student',
      message: msg
    }

    this._smsService.sendSMS(this.studentMsg);

  }

}
