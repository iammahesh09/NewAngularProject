import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IndiaService } from '../../services/india.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-india-states',
  templateUrl: './india-states.component.html',
  styleUrls: ['./india-states.component.css']
})
export class IndiaStatesComponent implements OnInit, OnDestroy {
  _state: Object;
  _subscription: Subscription;
  constructor(private _activatedRoute: ActivatedRoute, private _indiaService: IndiaService) { }

  ngOnInit() {

    // let _code = this._activatedRoute.snapshot.paramMap.get('code');

    // let _code = this._activatedRoute.snapshot.queryParams;
    // let _code = this._activatedRoute.snapshot.params['code'];


    this._subscription = this._activatedRoute.params.subscribe(
      res => console.log(res.code),
      error => console.log(error)
    )

  }

  ngOnDestroy() {
    this._subscription.unsubscribe();
  }

}
