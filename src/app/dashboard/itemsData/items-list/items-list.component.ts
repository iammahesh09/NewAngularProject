import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../services/item.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { CommunicationService } from '../../services/communication.service';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent implements OnInit {

  pageTitle: String = "Items List"

  item_error: String;
  items$;
  _itemsData = [];
  editing = {};
  columns = [
    { prop: 'name' },
    { name: 'name' },
    { name: 'type' },
    { name: 'cost' },
    { name: 'lastupdate' }
  ];

  constructor(private _itemService: ItemService,
    private spinner: NgxSpinnerService,
    private _communicationService: CommunicationService) { }

  ngOnInit() {
    this.spinner.show();
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 5000);

    this._itemService.getItems().subscribe(
      res => {
        this._itemsData = res;
      },
      error => this.item_error = error
    );

    this._communicationService.sendMessage(this.pageTitle);
  }

  updateValue(event, cell, rowIndex) {
    console.log('inline editing rowIndex', rowIndex)
    this.editing[rowIndex + '-' + cell] = false;
    this._itemsData[rowIndex][cell] = event.target.value;
    this._itemsData = [...this._itemsData];
    console.log('UPDATED!', this._itemsData[rowIndex][cell]);
  }

}
