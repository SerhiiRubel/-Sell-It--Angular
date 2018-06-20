import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import {AuthDefaultService} from '../services/auth-default.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  canActivated: boolean;
  constructor(private auth: AuthDefaultService) {

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    this.auth.isLogin$.subscribe(
      v => {
        if (v && state.url === '/login') {
          this.canActivated = false;
        } else if (!v && state.url !== '/login')  {
          this.canActivated = false;
        } else {
          this.canActivated = true;
        }
      }
    );
    return this.canActivated;
  }
}
