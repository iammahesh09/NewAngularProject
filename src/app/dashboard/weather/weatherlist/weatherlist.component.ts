import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-weatherlist',
  templateUrl: './weatherlist.component.html',
  styleUrls: ['./weatherlist.component.css']
})
export class WeatherlistComponent implements OnInit {
  englandData: Object = [];
  englandDataChildren: any;

  constructor(private _sharedService: SharedService) { }

  ngOnInit() {
    this._sharedService.getEngland().subscribe(
      res => {
        this.englandData = res;
        this.englandDataChildren = res['children'];
      },
      error => console.log(error)
    )
  }

  getCity(city) {
    console.log(city)
  }

}
