import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommunicationService } from '../../services/communication.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.css']
})
export class WeatherDetailsComponent implements OnInit, OnDestroy {
  menuTitle: any;
  id: number;
  private sub: any;
  WeatherDetails: Object = [];
  consolidated_weather: any;
  countryTitle: any;
  _items: import("d:/AngularProject/node_modules/rxjs/internal/Observable").Observable<any>;


  constructor(private _weatherService: WeatherService,
    private _communicationService: CommunicationService,
    private spinner: NgxSpinnerService,
    private _activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    this.spinner.show();
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 5000);

    this.sub = this._activatedRoute.params.subscribe(params => {
      // console.log(+params['id'])
      this.id = +params['id'];
      this._weatherService.getEnglandLocationDetails(this.id).subscribe(
        res => {
          this.WeatherDetails = res;
          this.countryTitle = res['parent']['title'];
          this.menuTitle = res['title'];
          this._communicationService.sendMessage(this.menuTitle)
        },
        err => console.log(err)
      )
    });

    this._items = this._weatherService.getItem();

  }



  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
