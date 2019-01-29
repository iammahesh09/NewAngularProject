import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  @Input() parentText;

  first_name: String = 'Mahesh';
  last_name: String = 'Chejarla';
  childText: any;

  constructor() { }

  ngOnInit() {
  }

  dataSend(data) {
    this.childText = data;
  }

}
