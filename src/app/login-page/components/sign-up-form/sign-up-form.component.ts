import {Component, EventEmitter, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.scss'],
  // encapsulation: ViewEncapsulation.None
})
export class SignUpFormComponent implements OnInit {

  public signUpForm: FormGroup;
  constructor() {
    this.signUpForm = new FormGroup({
      userName: new FormControl('', [
        Validators.required
      ]),
      firstName: new FormControl('', [
        Validators.required
      ]),
      lastName: new FormControl('', [Validators.required]),
      password: new FormControl('', Validators.required),
      confirmPassword: new FormControl('', Validators.required)
    });
  }
  @Output() submitSignUp = new EventEmitter();
  handleSubmit() {
    this.submitSignUp.emit();
    console.log(this.signUpForm.value);
  }
  ngOnInit() {
  }

}
