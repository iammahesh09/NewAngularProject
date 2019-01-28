import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IndiaService } from '../../services/india.service';

@Component({
  selector: 'app-india-states',
  templateUrl: './india-states.component.html',
  styleUrls: ['./india-states.component.css']
})
export class IndiaStatesComponent implements OnInit {
  _state: Object;

  constructor(private _activatedRoute: ActivatedRoute, private _indiaService: IndiaService) { }

  ngOnInit() {

    // let _code = this._activatedRoute.snapshot.paramMap.get('code');

    // let _code = this._activatedRoute.snapshot.queryParams;
    let _code = this._activatedRoute.snapshot.params['code'];
    console.log(_code)

    this._activatedRoute.params.subscribe(
      res => console.log(res.code),
      error => console.log(error)
    )


    // this._indiaService.getStateDetails(_code).subscribe(
    //   res => {
    //     console.log(res);
    //   },
    //   error => console.log(error)
    // );

  }

}
