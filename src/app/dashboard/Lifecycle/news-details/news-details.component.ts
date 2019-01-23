import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from '../../services/news.service';
import { CommunicationService } from '../../services/communication.service';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.css']
})
export class NewsDetailsComponent implements OnInit {
  newsDetails: any = {};

  constructor(private _activatedRoute: ActivatedRoute, private _newsService: NewsService, private _communicationService: CommunicationService) { }

  ngOnInit() {
    this._communicationService.currentNewsData.subscribe(
      data => {
        this.newsDetails = data;
        console.log(this.newsDetails);
      },
      error => console.log(error)
    )
  }

}
