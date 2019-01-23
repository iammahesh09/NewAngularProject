import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommunicationService } from '../../services/communication.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-weatherlist',
  templateUrl: './weatherlist.component.html',
  styleUrls: ['./weatherlist.component.css']
})
export class WeatherlistComponent implements OnInit {
  menuTitle: any = "Weather List"
  englandData: Object = [];
  englandDataChildren: any;
  newTime: Date;
  _subscription: any;

  constructor(private _weatherService: WeatherService,
    private _router: Router,
    private _communicationService: CommunicationService,
    private spinner: NgxSpinnerService) {
  }

  ngOnInit() {
    this.spinner.show();
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 5000);

    this._weatherService.getEngland().subscribe(
      res => {
        this.englandData = res;
        this.englandDataChildren = res['children'];
        this.menuTitle = res['title']
        this._communicationService.sendMessage(this.menuTitle);
      },
      error => console.log(error)
    )
    this._communicationService.createObsevable().subscribe(
      res => this.newTime = res
    )

  }

  getCity(city) {
    this._router.navigate(['/weather', city['woeid']]);
    console.log(city);
  }

}
