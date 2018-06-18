import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ApiUrls} from '../api-urls';
import {ILogin, IRegistration} from '../models/forms';
import {tap} from 'rxjs/operators';
import {CookieService} from 'ng2-cookies';
import {BehaviorSubject, Observable} from 'rxjs';
import {Router} from '@angular/router';
import {ProfileService} from './profile.service';
import {SessionService} from './session.service';

@Injectable({
  providedIn: 'root'
})
export class AuthDefaultService {
  public isLogin$ = new BehaviorSubject(false);
  constructor(
    private http: HttpClient,
    private cookie: CookieService,
    private route: Router,
    private profile: ProfileService,
    private session: SessionService
  ) {
  }

  public registration(form: IRegistration) {
    this.http.post(ApiUrls.registration, form).subscribe(
      response => console.log(response)
    );
  }

  public login(form: ILogin) {
    return this.http.post(ApiUrls.login, form).pipe(
      tap(
        response => {
          this.cookie.set('token', response['token']);
          this.profile.profile$.next(response['user']);
          this.session.user = response['user'];
          this.isLogin$.next(true);
          this.route.navigate(['']);
        }
      )
    );
  }

  public logout() {
    return this.http.get(ApiUrls.logout).subscribe(
      () => {
        this.session.token = null;
        this.session.user = null;
        this.isLogin$.next(false);
        this.profile.profile$.next(false);
      }
    );
  }
  public verifyEmail(key) {
    console.log('yes');
    this.http.post(ApiUrls.verifyEmail, key).subscribe(
      response => console.log(response)
    );
  }
  public googleLogin(token: string) {
    console.log(token);
    this.http.post(ApiUrls.google, {access_token: token}).subscribe(
      response => console.log(response)
    );
  }
}

