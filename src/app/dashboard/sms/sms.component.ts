import { Component, OnInit } from '@angular/core';
import { SmsService } from '../services/sms.service';

@Component({
  selector: 'app-sms',
  templateUrl: './sms.component.html',
  styleUrls: ['./sms.component.css']
})
export class SmsComponent implements OnInit {

  user: String;
  smslist: any = [];


  constructor(private _smsService: SmsService) { }

  ngOnInit() {
    this._smsService.getSMS().subscribe(
      message => {
        console.log(message)
        this.smslist.push(message);
      }
    );
  }


}
