import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';

export class AuthInterceptorService implements HttpInterceptor {
  // intercept - runs code right before req leaves our app
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    console.log('Request is on its way');
    // next - function or obj with important method  that allows req to continue its journey
    // thats the handle method
    // if we dont return this the app will brake
    // basically every action or click on button on web, the site on the console log sends a request line
    //
    return next.handle(req);

  }

}
