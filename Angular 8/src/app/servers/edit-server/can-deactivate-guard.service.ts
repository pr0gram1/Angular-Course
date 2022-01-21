//contract forces some class logic

import {Observable} from 'rxjs/Observable';
import {CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@anglar/router';

export interface CanComponentDeactivate {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;

}

export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactivate> {
  canDeactivate(component: CanComponentDeactivate),
  currentRoute: ActivatedRouteSnapshot,
  currentState: RouterStateSnapshot,
  nextState?: RouterStateSnapshot): Observable<boolean> | Promise<boolean> |
  boolean {

  return component.canDeactivate();
}
}

