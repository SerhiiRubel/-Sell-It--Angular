import {Component, ViewEncapsulation} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class LoginPageComponent {
  public isActive = true;
  constructor() {}
  changeTab(isActive: boolean) {
    this.isActive = isActive;
  }
  signIn() {}
  signUp() {}
}
