import { Component, OnInit } from '@angular/core';
import { FormsService } from '../../services/forms.service';
import { FormGroup, Validators, FormBuilder, FormArray } from '@angular/forms';

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
  ];

  userForm: FormGroup;
  submitted: boolean = false;
  username: any;

  constructor(private _formsService: FormsService, private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this._formsService.sendTitle(this.title);

    const _username = this._formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required]
    })

    this.userForm = this._formBuilder.group({
      username: _username,
      email: ['', [Validators.required, Validators.email, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
      mobile: this._formBuilder.array([]),
      language: ['', Validators.required],
      whatsapp: [''],
    });
  }

  get _formUser() { return this.userForm.controls; }

  get mobileForms() {
    return this.userForm.get('mobile') as FormArray;
  }

  addMobile() {
    const _phone = this._formBuilder.group({
      area_code: ["", Validators.required],
      tel_num: ["", Validators.required]
    });

    this.mobileForms.push(_phone);
  }

  deleteMobile(i) {
    console.log(i);
    this.mobileForms.removeAt(i)
  }

  onSubmit() {
    this.submitted = true;

    if (this.userForm.invalid) {
      return;
    }
    console.log('Form Submitted!');
    console.log(this.userForm.value);
    this.userForm.reset();

  }

  form_validation_messages = {
    'username': [
      { type: 'required', message: 'Username is required' },
      { type: 'minlength', message: 'Username must be at least 5 characters long' },
      { type: 'maxlength', message: 'Username cannot be more than 25 characters long' },
      { type: 'pattern', message: 'Your username must contain only numbers and letters' },
      { type: 'validUsername', message: 'Your username has already been taken' }
    ],
    'email': [
      { type: 'required', message: 'Email is required' },
      { type: 'pattern', message: 'Enter a valid email' }

    ],
    'phone': [
      { type: 'required', message: 'phone is required' },
      { type: 'minlength', message: 'phone must be at least 10 characters long' },
      { type: 'maxlength', message: 'phone cannot be more than 10 characters long' },
    ],
    'language': [
      { type: 'required', message: 'language is required' }
    ]
  }



}
