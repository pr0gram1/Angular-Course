// Hierarchical Injector
// AppModule - same instance of Service is available Application- wide
// AppComponent - -//- for all Compoenents but for all services
// Any other Component - -//- for the Component and all tis child components

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { AccountComponent } from './account/account.component';
import { NewAccountComponent } from './new-account/new-account.component';
import {AccountService} from "./account-service";
import {LoggingService} from "./logging.service";

@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    NewAccountComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [AccountService, LoggingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
