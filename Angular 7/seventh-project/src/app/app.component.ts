import { Component , OnInit} from '@angular/core';
import {AccountService} from "./account-service";

// pass trought property bidning to the app account component
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  accounts: {name: string, status: string} [] = [];

  constructor(private accountService: AccountService) {}


  ngOnInit() {
    //its used by shortcut because of private acc..
    this.accounts = this.accountService.accounts;
  }
}
