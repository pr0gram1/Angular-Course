import { Injectable , EventEmitter} from '@angular/core';
import {Subject} from 'rxjs';

// instead of adding in app module providers.. we just did it here and its also fine

@Injectable({providedIn: 'root'})

export class UserService {
  //adding property
  activatedEmitter = new Subject<boolean>();

}
