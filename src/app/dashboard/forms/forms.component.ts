import { Component, OnInit } from '@angular/core';
import { CommunicationService } from '../services/communication.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  title: any = 'Angular Forms';
  menuTitle: any = 'Forms';

  constructor(private _communicationService: CommunicationService) { }

  ngOnInit() {
    this._communicationService.sendMessage(this.menuTitle)
  }

}
