import { Component, OnInit } from '@angular/core';
import { IndiaService } from '../services/india.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-india',
  templateUrl: './india.component.html',
  styleUrls: ['./india.component.css']
})
export class IndiaComponent implements OnInit {
  indiaStates: Object;

  constructor(private _indiaServices: IndiaService, private _router: Router) { }

  stateCode(stateCode) {
    this._router.navigate(['/india', stateCode.code]);
  }

  ngOnInit() {

    this._indiaServices.getStates().subscribe(
      res => { this.indiaStates = res },
      err => console.log(err)
    )
  }

}
