import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<any>, next: any) {

    if (localStorage.getItem("token") != null) {
      // request = request.clone({
      //   setHeaders: {
      //     Authorization: `Bearer ${localStorage.getItem("token")}`,
      //   },
      //   withCredentials: true
      // })
    }
    console.log(request);
    return next.handle(request);

  }
}
