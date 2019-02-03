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

  _languages: String[] = [
    'English',
    'French',
    'German',
  ];

  _proficiency: String[] = ['beginner', 'intermediate', 'advanced']

  userForm: FormGroup;
  submitted: boolean = false;
  username: any;

  constructor(private _formsService: FormsService, private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this._formsService.sendTitle(this.title);

    const _username = this._formBuilder.group({
      firstname: [''],
      lastname: ['']
    })

    this.userForm = this._formBuilder.group({
      username: _username,
      email: [''],
      mobile: [''],
      language: [''],
      // Create Skill Form Group
      skills: this._formBuilder.group({
        skillName: [''],
        skillExperience: [''],
        proficiency: [''],
      }),
      whatsapp: [''],
    });
  }

  onSubmit() {
    this.submitted = true;

    if (this.userForm.invalid) {
      return;
    }
    // console.log(this.userForm);
    console.log(this.userForm.value);
    // this.userForm.reset();
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
