import { Component } from '@angular/core';
import {LoggingService} from "../logging.service";
import {AccountService} from "../account-service";

// properties
@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
 // providers: [LoggingService]

})
export class NewAccountComponent {

  // informs Angular to have instance for logging. Angular is for creating components. When angular comes trugh selectors it gives instances of our components. Then need to construct them

  constructor(private loggingService: LoggingService,
              private accountsService: AccountService) {
    //throw alert
    // cros component component communication with emitter
    // popup allert about communication when button is pressed
    this.accountsService.statusUpdated.subscribe{
      (status: string) => alert('New status' + status);
    }
  }

  onCreateAccount(accountName: string, accountStatus: string) {

    // works but we re injecting service

    this.accountsService.addAccount(accountName, accountStatus);
    //this.loggingService.logStatusChange(accountStatus);








    // works but you dont use this service loggon in Angular. This is just a example. Dont create instance manualy
    //const service = new LoggingService();
    //service.logStatusChange(accountStatus)
    // first service from this log task. Log data
    //console.log('A server status changed, new status: ' + accountStatus);
  }
}
