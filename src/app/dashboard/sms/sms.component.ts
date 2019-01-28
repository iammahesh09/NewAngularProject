import { Component, OnInit } from '@angular/core';
import { SmsService } from '../services/sms.service';

@Component({
  selector: 'app-sms',
  templateUrl: './sms.component.html',
  styleUrls: ['./sms.component.css']
})
export class SmsComponent implements OnInit {

  private smslist: Array<any> = [];

  user: String;


  constructor(private _smsService: SmsService) { }

  ngOnInit() {
    this._smsService.getStudentSMS().subscribe(
      message => {
        this.smslist.push(message);
      }
    );
    this._smsService.getTeacherSMS().subscribe(
      res => {
        this.smslist.push(res);
      }
    );
  }


}
