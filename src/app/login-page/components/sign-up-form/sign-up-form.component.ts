import {Component, EventEmitter, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthDefaultService} from '../../../core/services/auth-default.service';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.scss'],
  // encapsulation: ViewEncapsulation.None
})
export class SignUpFormComponent implements OnInit {

  public signUpForm: FormGroup;
  constructor(private auth: AuthDefaultService) {
    this.signUpForm = new FormGroup({
      username: new FormControl('', [
        Validators.required
      ]),
      email: new FormControl('', [
        Validators.required
      ]),
      password1: new FormControl('', Validators.required),
      password2: new FormControl('', Validators.required)
    });
  }
  @Output() submitSignUp = new EventEmitter();
  handleSubmit() {
    this.submitSignUp.emit();
    this.auth.registration(this.signUpForm.value);
  }
  ngOnInit() {
  }

}
