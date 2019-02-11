import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  @Input() employees = [];

  @Output() employee = new EventEmitter();

  first_name: String = 'Mahesh';
  last_name: String = 'Chejarla';
  childText: any;

  constructor() { }

  ngOnInit() {
    console.log(this.employees);
  }

  dataSend(data) {
    this.childText = data;
  }

  selectEmployee(emp) {
    // console.log(emp);
    this.employee.emit(emp);
  }

}
