import {Component, EventEmitter, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthDefaultService} from '../../../core/services/auth-default.service';

import {
  AuthService,
  GoogleLoginProvider
} from 'angular5-social-login';

@Component({
  selector: 'app-sign-in-form' ,
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.scss'],
})
export class SignInFormComponent implements OnInit {
  public signInForm: FormGroup = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    password: new FormControl('', [
      Validators.required
    ])
  });
  public email = this.signInForm.get('email');
  public password = this.signInForm.get('password');
  public errorMessage;
  constructor(
    private auth: AuthDefaultService,
    private socialAuthService: AuthService
  ) {}
  @Output() submitForm = new EventEmitter();
  handleSubmit() {
    this.submitForm.emit();
    this.auth.login(this.signInForm.value).subscribe();
  }
  ngOnInit() {
  }
  public socialSignIn() {
    const socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => this.auth.googleLogin(userData.token)
    );
  }
}
