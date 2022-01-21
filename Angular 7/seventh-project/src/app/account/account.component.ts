
// TS not Angular needs to know where service does it come from
import { Component, Input } from '@angular/core';
import {LoggingService} from "../logging.service";
import {AccountService} from "../account-service";

// if we remove AccountService instance from providers, now we use one of the same before we were not
// choosing  between one or multiple insances of same class

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  // inform ang to create login service
  providers: [LoggingService]
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;

  constructor(private loggingService: LoggingService,
              private accountsService: AccountService) {}


  onSetTo(status: string) {
    //console.log('A server status changed, new status: ' + status);
    //calling
    // own instances
    this.accountsService.updateStatus(this.id, status);
    //this.loggingService.logStatusChange(status);
    // same logging centrelized outsourced
    this.accountsService.statusUpdated.emit(status);

  }

}
