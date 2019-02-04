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

  _skillLevels: String[] = ['beginner', 'intermediate', 'advanced']

  userForm: FormGroup;
  submitted: boolean = false;
  username: any;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  mobilePattern = '[789][0-9]{9}';

  mobileLength = 0;


  formErrors = {
    'firstname': '',
    'lastname': '',
    'email': '',
    'mobile': '',
    'language': '',
    'skillName': '',
    'skillExperience': '',
    'skillLevel': ''
  };

  form_validation_messages = {
    'firstname': {
      'required': 'First name is required',
      'minlength': 'First name must be at least 3 characters long',
    },
    'lastname': {
      'required': 'Last name is required',
      'minlength': 'Last name must be at least 2 characters long',
    },
    'email': {
      'required': 'Email is required',
      'pattern': 'Enter a valid email'
    },
    'mobile': {
      'required': 'Phone is required',
      'pattern': 'Enter a valid phone number',
      'minlength': 'Phone must be at least 10 characters long',
      'maxlength': 'Phone cannot be more than 10 characters long',
    },
    'language': {
      'required': 'language is required'
    },
    'skillName': {
      'required': 'skill name is required'
    },
    'skillExperience': {
      'required': 'skill experience is required'
    },
    'skillLevel': {
      'required': 'skill level is required'
    }

  }



  constructor(private _formsService: FormsService, private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this._formsService.sendTitle(this.title);

    const _username = this._formBuilder.group({
      firstname: ['', [Validators.required, Validators.minLength(3)]],
      lastname: ['', [Validators.required, Validators.minLength(2)]]
    })

    this.userForm = this._formBuilder.group({
      username: _username,
      email: ['', [Validators.required, Validators.email, Validators.pattern(this.emailPattern)]],
      mobile: ['', [Validators.required, Validators.pattern(this.mobilePattern), Validators.maxLength(10), Validators.minLength(10)]],
      language: ['', [Validators.required]],
      // Create Skill Form Group
      skills: this._formBuilder.group({
        skillName: ['', [Validators.required]],
        skillExperience: ['', [Validators.required]],
        skillLevel: ['', [Validators.required]],
      }),
      whatsapp: [''],
    });

    this.userForm.get('mobile').valueChanges.subscribe(
      value => {
        this.mobileLength = value.length;
      }
    )

    this.userForm.valueChanges.subscribe(
      data => this.logValidationErrors(this.userForm)
    );



  }

  setDataLoad() {
    this.userForm.patchValue({
      username: {
        firstname: 'Mahesh',
        lastname: 'Chejarla'
      },
      email: 'mahesh@gmail.com',
      mobile: '9959012345',
      language: 'English',
      skills: {
        skillName: 'Angular',
        skillExperience: 3,
        skillLevel: 'advanced'
      },
      whatsapp: true
    })
  }

  logValidationErrors(group: FormGroup = this.userForm): void {
    Object.keys(group.controls).forEach((key: string) => {
      const abstractControl = group.get(key);
      if (abstractControl instanceof FormGroup) {
        this.logValidationErrors(abstractControl);
      } else {
        // Clear the existing validation errors
        this.formErrors[key] = '';
        if (abstractControl && !abstractControl.valid) {
          const messages = this.form_validation_messages[key];
          for (const errorKey in abstractControl.errors) {
            if (errorKey) {
              this.formErrors[key] += messages[errorKey] + ' ';
            }
          }
        }
      }
    });
  }

  onSubmit() {
    this.submitted = true;

    if (this.userForm.invalid) {
      return;
    }
    // console.log(this.userForm);
    console.log(this.userForm);
    this.userForm.reset();
  }

  resetForm() {
    this.userForm.reset();
  }


}
