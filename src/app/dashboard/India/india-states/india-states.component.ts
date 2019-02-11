import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IndiaService } from '../../services/india.service';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-india-states',
  templateUrl: './india-states.component.html',
  styleUrls: ['./india-states.component.css']
})
export class IndiaStatesComponent implements OnInit, OnDestroy {
  _state: Object;
  _subscription: Subscription;
  _code: any;

  constructor(private _activatedRoute: ActivatedRoute, private _indiaService: IndiaService) { }

  ngOnInit() {

    // let _code = this._activatedRoute.snapshot.paramMap.get('code');
    // let _code = this._activatedRoute.snapshot.params['code'];

    // let _queryParams = this._activatedRoute.snapshot.queryParams['order'];
    // let _fragment = this._activatedRoute.snapshot.fragment;


    this._subscription = this._activatedRoute.params.subscribe(
      res => {
        this._code = res.code;
        console.log(this._code);
        this._indiaService.getStates().subscribe(
          data => console.log(data)
        )
      },
      error => console.log(error)
    )




  }

  ngOnDestroy() {
    this._subscription.unsubscribe();
  }

}
