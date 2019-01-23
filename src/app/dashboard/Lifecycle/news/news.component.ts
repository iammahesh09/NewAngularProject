import { Component, OnInit } from '@angular/core';
import { CommunicationService } from '../../services/communication.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { NewsService } from '../../services/news.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  pageTitle: any = 'News'
  error_news: string;
  newsData: Object = [];
  newsDetails: any;


  constructor(private _communicationService: CommunicationService,
    private spinner: NgxSpinnerService,
    private _newsService: NewsService) { }

  getNewsId(data: any) {
    this._communicationService.getNewsDetails(data)
  }

  ngOnInit() {

    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 5000);

    this._communicationService.sendMessage(this.pageTitle);

    this._newsService.getNews().subscribe(
      res => {
        console.log(res);
        this.newsData = res;
      },
      error => {
        this.error_news = 'News not loaded'
      }
    )

  }

}
