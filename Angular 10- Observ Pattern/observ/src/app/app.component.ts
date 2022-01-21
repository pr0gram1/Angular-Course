import { Component, OnInit, onDestroy } from '@angular/core';
import {UserService} from "./user.service";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, onDestroy {

  userActivated = false;
  private activatedSub: Subscription;

  constructor(private userService: UserService) {}

  ngOnInit() {
   this.activatedSub = this.userService.activatedEmitter.subscribe(didActivate => {
      this.userActivated = didActivate;
    });
  }

  // always if you dont need more obs make unsub method with onDestroy

  ngOnDestroy(): void {
    this.activatedSub.unsubscribe();
    // this prevents memory leaks
  }
}
