import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, CanLoad, Route, UrlSegment } from '@angular/router';
import { Observable } from 'rxjs';
import { take, tap } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad,CanActivate{
  constructor(private authServices:AuthService,private router:Router){}
  
  
  canLoad():Observable<boolean> {
    return this.authServices.isAuth()
    .pipe(
      tap(state=>{
        if(!state){this.router.navigate(["/auth"])}
      }),take(1)
    );
  }
  canActivate():Observable<boolean> {
    return this.authServices.isAuth()
    .pipe(
      tap(state=>{
        if(!state){this.router.navigate(["/auth"])}
      })
    );
  }
  
}
