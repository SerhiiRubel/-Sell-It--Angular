import {Component, EventEmitter, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-sign-in-form' ,
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.scss'],
})
export class SignInFormComponent implements OnInit {
  public signInForm: FormGroup;
  constructor() {
    this.signInForm = new FormGroup({
      userEmail: new FormControl('', [
        Validators.required,
        Validators.email,
        Validators.maxLength(12)
      ]),
      userPassword: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(12)
      ])
    });
  }
  @Output() submitForm = new EventEmitter();
  handleSubmit() {
    this.submitForm.emit();
    console.log(this.signInForm.value);
  }
  ngOnInit() {
  }

}
