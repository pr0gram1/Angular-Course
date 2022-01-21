import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams, HttpEventType} from '@angular/common/http';
import {map, catchError, tap} from '@rxjs/operators';
import {Subject, throwError} from '@rxjs';

// TS logic - if you tell me that my response data will be of that format
// then it needs to be convertet as JS object

import {Post} from './post.model';


@Injectable({providenIn: 'root'})
export class PostsService {

  error = new Subject<String>();

  constructor( private http: HttpClient) {}
// the post we are sending
  createAndStorePost(title: string, content: string) {
    const postData: Post = {title : title, content: content};
    this.http
      .post<{name: string}>('https://ng-complete-guide-c5c24-default-rtdb.firebaseio.com/posts.json',
        postData,
        {
          // this gives more information about console logs
          observe: 'response'
        }
      ).subscribe(responseData => {
      console.log(responseData);
    }, error => {
        this.error = error.message;
    });
  }

  fetchPosts() {

    let searchParams = new HttpParams();
    searchParams = searchParams.append('print', 'pretty');
    searchParams = searchParams.append('custom', 'key')
    return this.http
      .get<{ [key: string]: Post }>(
        'https://ng-complete-guide-c5c24-default-rtdb.firebaseio.com/posts.json'),
      {
        //custom headers in network
        headers: new HttpHeaders({"Custom-Header": 'Hello'}),
        // this just adds at the end of url above print and pretty. You could do it manualy but also we have this option with set method
        //params: new HttpParams().set('print', 'pretty')
        params:searchParams,
        // same way with append
        responseType: 'json'
      }

      .pipe(
        map((responseData => {
          const postsArray: Post [] = [];
          for(const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              postsArray.push({...responseData[key], id: key})
            }
          }
          return postsArray;
        }),
      catchError(errorRes => {
          // Send to analytics Server
          // operators for error handling
          return throwError(errorRes);
        })
      );


  }

  deletePosts() {
        //tap operator - we can do smth with our response
        //but not diturbed the subscribe function
    // HttpEventType is a enum - TS and JS supported only
    // its a map of numbers and it understands which type of event so which number stand for which internal type of event

    return this.http
      .delete('https://ng-complete-guide-c5c24-default-rtdb.firebaseio.com/posts.json'), {
      observe:'events',
      // dont covert to child object angular.. stick to text

      responseType: 'text'
      }
      .pipe(
        tap(event => {
          console.log(event);
          if (event.type === HttpEventType.Sent) {
            // ...
          }
          if (event.type === HttpEventType.Response) {
            console.log(event.body);
          }
        })
      )
  }
}

