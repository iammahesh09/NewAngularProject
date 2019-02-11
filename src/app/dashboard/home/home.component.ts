import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  employeeData: any = []
  empForm: FormGroup;
  submitted: boolean = false;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  mobilePattern = '[789][0-9]{9}';

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {

    this.empForm = this._formBuilder.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email, Validators.pattern(this.emailPattern)]],
      mobile: ['', [Validators.required, Validators.pattern(this.mobilePattern)]],
      whatsapp: ['']
    });

  }

  updateEmp(employee) {
    console.log(employee)
    this.empForm.patchValue({
      username: employee.username,
      email: employee.email,
      mobile: employee.mobile,
      whatsapp: employee.whatsapp
    })
  }

  setDataLoad() {
    this.empForm.patchValue({
      username: 'Mahesh Chejarla',
      email: 'mahesh@gmail.com',
      mobile: '9959012345',
      whatsapp: true
    })
  }

  onSubmit() {
    this.submitted = true;

    if (this.empForm.invalid) {
      return;
    }
    this.employeeData.push(this.empForm.value);
    this.empForm.reset();

  }

  onUpdate() {
    this.submitted = true;
    if (this.empForm.invalid) {
      return;
    }
  }

}
