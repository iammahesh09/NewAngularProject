import { Component, OnInit } from '@angular/core';
import { CommunicationService } from '../../services/communication.service';

@Component({
  selector: 'app-template-driven-forms',
  templateUrl: './TemplateDrivenForms.component.html',
  styleUrls: ['./TemplateDrivenForms.component.css']
})
export class TemplateDrivenFormsComponent implements OnInit {
  title: any = 'Template Driven Form'
  constructor(private _communicationService: CommunicationService) { }

  ngOnInit() {
    this._communicationService.sendMessage(this.title);

  }

}
