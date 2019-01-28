import { Component, OnInit } from '@angular/core';
import { SmsService } from '../../services/sms.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  studentMsg: any;
  constructor(private _smsService: SmsService) { }

  ngOnInit() {
  }

  studentSMS(msg) {
    this._smsService.sendStudentSMS(msg);
    this.studentMsg = '';
  }

}
