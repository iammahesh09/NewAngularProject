import { Component, OnInit } from '@angular/core';
import { FormsService } from '../services/forms.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  title: any = 'Angular Forms';

  constructor(private _formsService: FormsService) { }

  ngOnInit() {
    this._formsService.getTitle().subscribe(
      res => {
        this.title = res;
      },
      err => console.log(err)
    );
  }

}
