import { Injectable } from '@angular/core';
import {CookieService} from 'ng2-cookies';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  constructor(
    private cookie: CookieService
  ) { }
  public get token() {
    return this.cookie.get('token');
  }
  public set token(token) {
    this.cookie.set('token', token);
  }
  public get user() {
    return localStorage.getItem('user');
  }
  public set user(user) {
    localStorage.setItem('user', JSON.stringify(user));
  }
}
