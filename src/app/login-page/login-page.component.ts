import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {AuthDefaultService} from '../core/services/auth-default.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class LoginPageComponent implements OnInit {
  public isActive = true;
  constructor(
    private route: ActivatedRoute,
    private auth: AuthDefaultService
              ) {}
  changeTab(isActive: boolean) {
    this.isActive = isActive;
  }
  ngOnInit() {
    this.route.queryParams.subscribe(
      key => this.auth.verifyEmail(key)
    );
  }
  signIn() {}
  signUp() {}
}
