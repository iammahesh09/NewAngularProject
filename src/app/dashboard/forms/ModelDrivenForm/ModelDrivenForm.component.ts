import { Component, OnInit } from '@angular/core';
import { FormsService } from '../../services/forms.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-model-driven-form',
  templateUrl: './ModelDrivenForm.component.html',
  styleUrls: ['./ModelDrivenForm.component.css']
})
export class ModelDrivenFormComponent implements OnInit {

  title: String = 'Model Driven Form';
  _languages: string[] = [
    'English',
    'French',
    'German',
  ]

  myform: FormGroup;
  firstName: FormControl;
  lastName: FormControl;
  email: FormControl;
  phone: FormControl;
  language: FormControl;
  password: FormControl;
  whatsapp: FormControl;
  constructor(private _formsService: FormsService) { }

  ngOnInit() {
    this._formsService.sendTitle(this.title);
    this.createForm();
  }

  onSubmit() {
    if (this.myform.valid) {
      console.log("Form Submitted!");
      console.log(this.myform.value);
      // this.myform.reset();
    }
  }

  createForm() {
    this.myform = new FormGroup({
      username: new FormGroup({
        firstname: new FormControl("", Validators.required),
        lastname: new FormControl("", Validators.required)
      }),
      email: new FormControl("", Validators.required),
      phone: new FormControl("", Validators.required),
      language: new FormControl("", Validators.required),
      whatsapp: new FormControl(""),
    });
  }


}
