import {Injectable, EventEmmiter} from '@angular/core':

import {LoggingService} from "./logging.service";
// way of injecting a service into a service
// adding meta data
// only add if youre goint to get smth injected
@Injectable()

export class AccountService {

  accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Testaccount',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];

  // providing an event witch can be triggered in one component and listen in another
  // trigger - account.component.ts onSetTo method

  statusUpdated = new EventEmmiter<string>();

  constructor(private loggingService: LoggingService) {
  }

  addAccount(name: string, status: string) {
    this.accounts.push({name: name, status: status});
    this.loggingService.logStatusChange(status);

  }

  updateStatus(id: number, status: string ) {
    this.accounts[id].status;
    this.loggingService.logStatusChange(status);

  }

  // since account isnt array it is a reference type
  // normal JS behaviour
}
