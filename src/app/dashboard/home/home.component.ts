import { Component, OnInit, ViewChild, AfterViewInit, AfterContentInit, ContentChild } from '@angular/core';
import { DemoComponent } from './demo/demo.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit, AfterViewInit, AfterContentInit {

  title: String = 'Hello World';

  @ViewChild(DemoComponent) _viewChild: DemoComponent;

  @ContentChild(DemoComponent) _contentChild: DemoComponent;

  constructor() { }

  sendData(data) {
    this.title = data;
  }

  ngAfterViewInit() {
    console.log(this._viewChild);
  }

  ngAfterContentInit() {
    console.log(this._contentChild);
  }
  ngOnInit() {

  }



}
