// we will use this for user login aut for security


import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivateChild} from '@angular/router';
import { Obsevable } from 'rxjs/Observable;'
import { Injectble } from 'angular/core;'
import {AuthService} from './auth.service';

// adding this to be able to reach out to the other service, to inject that service inot this guard
@Injectble()

// canActivate can run bot async and return an observ / promise or sync
export class AuthGuard implements CanActivate, CanActivateChild{
  constructor(private authService: AuthService, private router: Router) {}

  // check if is log of logoff
  canActivate (route: ActivatedRouteSnapshot,
               state: RouterStateSnapshot) : Obsevable<boolean> | Promise<boolean> | boolean {
return this.authService.isAuthenticated()
  .then(
    (authenticated: boolean) => {
      if (authenticated) {
        return true
      }else {
      this.router.navigate(['/']);

      }
    }
  )
  }

  // now with this liek with routs protection, we can protect its child routes with this method and set it in module
  canActivateChild(route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot) : Obsevable<boolean> | Promise<boolean> | boolean {
  return this.canActivate(route, state);
  }

}
