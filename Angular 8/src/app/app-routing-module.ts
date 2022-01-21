import { NgModule } from '@angular/core';
import {HomeComponent} from './home/home.component';
import {UserComponent} from './users/user/user.component';
import {ServersComponent} from './servers/servers.component';
import {ServerComponent} from './servers/server/server.component';
import {EditServerComponent} from './servers/edit-server/edit-server.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import { Routes, RouterModule } from '@angular/router';
import {AuthGuard} from './auth-guard.service';
import {CanDeactivateGuard} from './servers/edit-server/can-deactivate-guard.service';

// path = localhost:4200:users** - component, class , page that gets to loaded
const appRoutes: Routes =[
  {path: '', component: HomeComponent },
  {path: 'users', component: UserComponent, children: [
      {path: ':id/:name', component: UserComponent },
    ] },
  // user route noticing. Colon tell Angular that this is a dynamic part of the path. / is dynamic npr url local:400/users/something works
  // children: nesting - if we dont want to load a brand new page. A nice way to load it next to this menu. It shadows
  // servers and child routs are only acces if authguard canActivate method returns true which will only happen
  // if loggedin is set to true
  {
    path: 'servers',
    //canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    component: ServersComponent,
    children: [
      {path: ':id', component: ServerComponent },
      {path: ':id/edit', component: EditServerComponent, canDeactivate:[CanDeactivateGuard] },
    ] },
  {path: 'not-found', component: PageNotFoundComponent},
  {path: '**', redirectTo: '/not-found'} // the last route not the first!! or you will always het redirected to error
  //redirectTo logic - if we type in url someting that isnt real path it will get the error page
  // BUT it will change the url into /not-found

]

//adding import again
@NgModule({

  imports: [
    //forRoot registers our routes to apps
    RouterModule.forRoot(appRoutes)
  ],

  exports: [RouterModule]

})

export class AppRoutingModule {

}
