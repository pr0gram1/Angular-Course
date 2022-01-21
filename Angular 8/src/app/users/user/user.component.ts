import { Component, OnInit , OnDestroy} from '@angular/core';
import { ActivatedRute, Params } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  user: {id: number, name: string};
  paramsSubscription: Subscription;

  constructor(private route: ActivatedRute) { }

  ngOnInit() {
    this.user = {
      // in the app module we set path or route as user/id. And we named it the ID here so we can retrive the id from this
      // params object here below. And added name there so we added here below
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name'],
    };
    // params is observable. Third party package, working with async tasks witch means in some future when user click this in it will change
    // you cant block your code because you dont know when will it happen
    // it is a way to subscribe to some event which it might happen to then execute the code when happens
    // sub takes 3 arg
    // now when we click the Anna button not only that changes url but the string and the id replaces with its own arg. Anna and 10 id
    this.paramsSubscription = this.route.params
      .subscribe(
      //this will be fired whenever the parameters change in this use case
      (params: Params) => {
        // update user object
        this.user.id = params ['id'];
        this.user.id = params ['name'];
      }
    );
  }

  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
  }

}
