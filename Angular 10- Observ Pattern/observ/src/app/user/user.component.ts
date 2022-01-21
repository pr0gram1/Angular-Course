import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import {UserService} from "../user.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  id: number;

  constructor(private route: ActivatedRoute, private userService: UserService) {
  }

  ngOnInit() {
    // params - subscribe observerble - stream of data if data is emited it is notified
    this.route.params.subscribe((params: Params) => {
      this.id = +params.id;
    });
  }
  // using the subject works in the same way as emitter. But its the better way
  // more efficient
  // use as cross component emitter.. using next instead emmit
  // dont use subject in situation if your using @Output because your using the Angular emitter

  onActivate() {
    this.userService.activatedEmitter.next(true);
  }
}
