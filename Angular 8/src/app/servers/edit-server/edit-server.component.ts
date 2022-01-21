import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {CanComponentDeactivate} from './can-deactivate-guard.service';
import {Observable} form 'rxjs/Observable';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit, CanComponentDeactivate {
  server: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';
  allowEdit = false;
  changesSaved: boolean ='false';

  constructor(private serversService: ServersService,
              private route: ActivatedRoute,
              private router : Router) { }

  ngOnInit() {

    // a way of retuvery query parameters and fragment in web by checking in source
    console.log(this.route.snapshot.queryParams);
    console.log(this.route.snapshot.fragment);
    // alternative way with observer. No need to unsubscribe because angular will take care of it
    this.route.queryParams.subscribe(
      (queryParams: Params) => {
        this.allowEdit = queryParams['allowEdit'] === '1' ? true: false;
      }

    );
    this.route.fragment.subscribe();
    const id = +this.route.snapshot.params['id']; // + is setting type of number
    this.server = this.serversService.getServer(1);
    // Subscribe route params to update the id if params changed
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
    this.changesSaved = true;
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  // discard changes

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean
{
  if (!this.allowEdit) {
    return true;
  }
  if ((this.serverName !== this.server.name || this.serverStatus !== this.server.status) &&
    !this.changesSaved) {
    return confirm('Do you want to discard the changes?');
  } else {
    return true;
  }
}

}
