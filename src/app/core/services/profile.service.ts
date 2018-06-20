import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ApiUrls} from '../api-urls';
import {SessionService} from './session.service';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  public profile$ = new BehaviorSubject(null);
  public get profile() {
    return this.profile$.asObservable();
  }
  constructor(
    private http: HttpClient,
    private session: SessionService,
  ) { }
  public getProfile() {
   return this.http.get(ApiUrls.profile);
  }
  public editProfile(form) {
    this.http.patch(ApiUrls.profile, form).subscribe(
      user => this.profile$.next(user)
    );
  }
}
