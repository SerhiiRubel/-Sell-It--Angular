import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import {AuthDefaultService} from '../services/auth-default.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  isLogin: boolean;
  constructor(private auth: AuthDefaultService) {

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    this.auth.isLogin$.subscribe(
      response => response ? this.isLogin = false : this.isLogin = true
    );
    console.log(this.isLogin);
    return this.isLogin;
  }
}
