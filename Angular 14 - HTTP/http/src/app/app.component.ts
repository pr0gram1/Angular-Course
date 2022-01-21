import { Component, OnInit , onDestroy} from '@angular/core';
import { HttpClient } from '@angular/common/http';
// get same data and return new data and auto rewrap in observ to subscribe
import {map} from 'rjxs/operators';
import {Post} from "./post.model";
import {PostsService} from "./posts.service";
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  loadedPosts: Post[] = [];
  isFetching = false;
  error = null;
  private errorSub: Subscription;

  constructor(private http: HttpClient, private postsService: PostService) {}

  // whenever the page loads - fetch the posts
  ngOnInit() {
    this.errorSub = this.postsService.error.subscribe(errorMessage => {
      this.error = errorMessage;
    });

    this.isFetching = true;
    this.postsService.fetchPosts().subscribe(posts => {
      this.isFetching= false;
      this.loadedPosts = posts;

    }, error => {
      this.error = error.message;



    });

  }

  onCreatePost(postData: Post) {

    this.postsService.createAndStorePost(postData.title, postData.content);
    // Send Http request
    // never communicate directly to database with angular app
    // post will return the observable that wraps the request so call subscribe
    // running after subscribe - in console on web you get some log and in network we can see 2 json posts requests
    // first one is type OPTIONS - means check whenever post request is allowed to be send and if it is
    // POST type - the actual request. Has the firebase url below. And in payload you have json area

  }

  onFetchPosts() {
    // Send Http request
    this.isFetching = true;
    this.postsService.fetchPosts().subscribe(posts => {
      this.isFetching= false;
      this.loadedPosts = posts;

    }, error => {
      // even with error your not fetching data
      this.isFetching = false;
      this.error = error.message;
      console.log(error);


    });

  }

  onClearPosts() {
    // Send Http request

  // fetching the data on the firebase - that the post created
  // no subscription no request!!
  // using observ operators to transform our data

  this.postsService.deletePosts().subscribe(() => {
    this.loadedPosts = [];

});

  }
  // get rid of error alert
  onHandleError() {
    this.error = null;
  }

  // using subject error forwarding
  ngOnDestroy() {
    this.errorSub.unsubscribe();
  }
}
