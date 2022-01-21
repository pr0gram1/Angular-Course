import { Component, OnInit, OnDestroy } from '@angular/core';

import { interval, Subscription, Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  privae firstObsSubscription : Subscription;
  constructor() { }
// building own observ. To build only our own observ we need to import package
  // but with only .subscribe using params we dont need to


  ngOnInit() {
    // everysecond new value emitt
    // incrementing value in console from interval function. Gives obser
    // Memory leak  - every new click on tab makes new observ and thats bad for app. slow down


// this.firstObsSubscription = interval(1000).subscribe(count => {
  //  console.log(count);
  //})

// fires up every second new observerble but the observer knows all about them
    // chunk of code that represent inside of observ "under the hood"
    const customIntervalObservable = Observable.create(observer => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        if (count == 0 ){
          observer.complete();
          // when goes to 2. It stops the count and completes
          // if we put == 4++ the app gets the error but it doesnt complete it.
        }
        //if counts to 3 display error message
        if (count > 3 ){
          observer.error(new Error('Count is grater than 3'));
        }
        count++;
      },1000);
    });


    // pipe adds one or more operators - takes unlimited ammount of arg. And each arg will be imported from rxjs import operater
    this.firstObsSubscription = customIntervalObservable.pipe(filter(data => {
      return data > 0;
      // filter skips the first observer for 1 sec then skips to 2nd
    }), map((data: number) =>{
      return 'Round' + (data+1);
    })).subscribe(data => {
      console.log(data);
    }, error => {
      console.log(error);
      alert(error.message);
      // if the error occur after the 3, notifiy by poping up the message popup frame
    }, () => {
      console.log('Completed');
      // message for .complete sysout
    });

 }

  // with this ondestroy method. On everyclik we destroy a old observ. Simple unsubscribes from it
  OnDestroy(): void {
    this.firstObsSubscription.unsubscribe();
  }

}
