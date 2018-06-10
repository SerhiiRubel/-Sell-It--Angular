import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ApiUrls} from '../api-urls';
import {ILogin, IRegistration} from '../models/forms';
import {tap} from 'rxjs/operators';
import {CookieService} from 'ng2-cookies';
import {BehaviorSubject} from 'rxjs';
import {ActivatedRoute, Route, Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public currentUser = new BehaviorSubject(false);

  constructor(
    private http: HttpClient,
    private cookie: CookieService,
    private route: Router
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
          this.currentUser.next(response['user']);
          this.route.navigate(['']);
        }
      )
    );
  }

  public logout() {
    return this.http.get(ApiUrls.logout).subscribe(
      () => {
        this.cookie.delete('token');
        this.currentUser.next(false);
      }
    );
  }
}

