import { Component, OnInit } from '@angular/core';
import { FormsService } from '../../services/forms.service';

@Component({
  selector: 'app-template-driven-forms',
  templateUrl: './TemplateDrivenForms.component.html',
  styleUrls: ['./TemplateDrivenForms.component.css']
})
export class TemplateDrivenFormsComponent implements OnInit {
  title: any = 'Template Driven Form'
  constructor(private _formsService: FormsService) { }

  ngOnInit() {
    this._formsService.sendTitle(this.title);
  }

}
