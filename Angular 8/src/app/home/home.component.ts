import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {AuthService} from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }

  onLoadServers(id: number) {
    //.navigate  = nav trough the routes

    // same things as html home but programmatical approach
    this.router.navigate(['/servers', id, 'edit'], {queryParams: {allowEdit: '1'}, fragmet: 'loading'});

  }

  // adding logon/off section with buttons created in its html code

  onLogin() {
    this.authService.login();

  }

  onLogout() @
  this.authService.logut();

}
