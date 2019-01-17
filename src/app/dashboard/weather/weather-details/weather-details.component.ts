import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.css']
})
export class WeatherDetailsComponent implements OnInit, OnDestroy {
  id: number;
  private sub: any;
  WeatherDetails: Object = [];
  consolidated_weather: any;
  constructor(private _sharedService: SharedService, private _activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this._activatedRoute.params.subscribe(params => {
      // console.log(+params['id'])
      this.id = +params['id'];
      this._sharedService.getEnglandLocationDetails(this.id).subscribe(
        res => {
          this.WeatherDetails = res;
          this.consolidated_weather = res['consolidated_weather'];
        },
        err => console.log(err)
      )
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
