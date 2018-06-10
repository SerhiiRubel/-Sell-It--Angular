import {Component, EventEmitter, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../../core/services/auth.service';

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
  constructor(private auth: AuthService) {}
  @Output() submitForm = new EventEmitter();
  handleSubmit() {
    this.submitForm.emit();
    this.auth.login(this.signInForm.value).subscribe();
  }
  ngOnInit() {
  }

}
