import { Injectable } from '@angular/core';
import { SlackService } from './slack.service';

@Injectable({
    providedIn: 'root'
})
export class LoggingService {

    constructor(private _slackService: SlackService) { }

    logError(message) {
        this._slackService.postErrorOnSlack(message);
    }
}