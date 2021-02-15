import { Injectable, Injector } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptors implements HttpInterceptor {

  constructor(private injector:Injector) { }
  intercept(req, next) {    
    let tokenizedReq = req.clone({
      url:`${environment.apiUrl}${req.url}` ,
      
    })
    return next.handle(tokenizedReq)
  }
}
