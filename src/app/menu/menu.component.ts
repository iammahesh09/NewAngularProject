import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommunicationService } from '../dashboard/services/communication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit, OnDestroy {

  menuTitle: String = "Weather";
  _subscription: any;
  constructor(private _communicationService: CommunicationService) {
  }
  ngOnInit() {
    this._subscription = this._communicationService.getMessage().subscribe(title => { this.menuTitle = title; });
  }
  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this._subscription.unsubscribe();
  }

}
