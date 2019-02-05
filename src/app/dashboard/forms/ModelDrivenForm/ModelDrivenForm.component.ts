import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormArray } from '@angular/forms';
import { CommunicationService } from '../../services/communication.service';

@Component({
  selector: 'app-model-driven-form',
  templateUrl: './ModelDrivenForm.component.html',
  styleUrls: ['./ModelDrivenForm.component.css']
})
export class ModelDrivenFormComponent implements OnInit {

  title: String = 'Model Driven Form';

  userData: any = [];
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



  constructor(private _formBuilder: FormBuilder, private _communicationService: CommunicationService) { }

  ngOnInit() {


    this._communicationService.sendMessage(this.title)


    const _username = this._formBuilder.group({
      firstname: ['', [Validators.required, Validators.minLength(3)]],
      lastname: ['', [Validators.required, Validators.minLength(2)]]
    })

    this.userForm = this._formBuilder.group({
      username: _username,
      contactPreference: ['email'],
      email: ['', [Validators.required, Validators.email, Validators.pattern(this.emailPattern)]],
      mobile: [''],
      language: ['', [Validators.required]],
      // Create Skill Form Group
      skills: this._formBuilder.array([
        this.addSkillFormGroup()
      ]),
      fileUpload: [''],
      whatsapp: ['']
    });

    this.userForm.get('mobile').valueChanges.subscribe(
      value => {
        this.mobileLength = value.length;
      }
    )

    this.userForm.valueChanges.subscribe(
      data => this.logValidationErrors(this.userForm)
    );

    this.userForm.get('contactPreference')
      .valueChanges.subscribe((data: string) => {
        this.onContactPrefernceChange(data);
      });

  }
  addSkillButtonClick(): void {
    (<FormArray>this.userForm.get('skills')).push(this.addSkillFormGroup());
  }
  addSkillFormGroup(): FormGroup {
    return this._formBuilder.group({
      skillName: ['', [Validators.required]],
      skillExperience: ['', [Validators.required]],
      skillLevel: ['', [Validators.required]]
    });
  }

  removeSkillButton(skillGroupIndex: number): void {
    (<FormArray>this.userForm.get('skills')).removeAt(skillGroupIndex);
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
      fileUpload: '',
      whatsapp: true
    })
  }

  logValidationErrors(group: FormGroup = this.userForm): void {
    Object.keys(group.controls).forEach((key: string) => {
      const abstractControl = group.get(key);

      this.formErrors[key] = '';
      if (abstractControl && !abstractControl.valid && (abstractControl.touched || abstractControl.dirty)) {
        const messages = this.form_validation_messages[key];
        for (const errorKey in abstractControl.errors) {
          if (errorKey) {
            this.formErrors[key] += messages[errorKey] + ' ';
          }
        }
      }

      if (abstractControl instanceof FormGroup) {
        this.logValidationErrors(abstractControl);
      }

      if (abstractControl instanceof FormArray) {
        for (const control of abstractControl.controls) {
          if (control instanceof FormGroup) {
            this.logValidationErrors(control);
          }
        }
      }
    });
  }


  onContactPrefernceChange(selectedValue: string) {
    const phoneFormControl = this.userForm.get('mobile');
    const emailFormControl = this.userForm.get('email');
    if (selectedValue === 'mobile') {
      phoneFormControl.enable();
      phoneFormControl.setValidators([Validators.required, Validators.pattern(this.mobilePattern), Validators.maxLength(10), Validators.minLength(10)]);
      emailFormControl.clearValidators();
      emailFormControl.reset();
      emailFormControl.disable();
    } else {
      emailFormControl.enable();
      emailFormControl.setValidators([Validators.required, Validators.email, Validators.pattern(this.emailPattern)]);
      phoneFormControl.clearValidators();
      phoneFormControl.reset();
      phoneFormControl.disable();
    }

    phoneFormControl.updateValueAndValidity();
    emailFormControl.updateValueAndValidity();
  }

  upLoadFile(flle) {
    this.userData.file = flle[0];
    console.log(this.userData.fileUpload);
  }

  onSubmit() {
    this.submitted = true;

    if (this.userForm.invalid) {
      return;
    }
    this.userData.push(this.userForm.value);

    console.log(this.userData)

  }

  resetForm() {
    this.userForm.reset();
  }


}
