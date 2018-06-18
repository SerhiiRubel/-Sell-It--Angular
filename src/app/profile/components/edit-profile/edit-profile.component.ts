import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {ApiUrls} from '../../../core/api-urls';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  public profileForm = new FormGroup({
    username: new FormControl(),
    first_name: new FormControl(),
    last_name: new FormControl(),
    avatar: new FormControl(),
    location: new FormControl(),
    color_scheme: new FormControl(),
    language: new FormControl()
  })
  constructor(
    private http: HttpClient
  ) {}

  ngOnInit() {
  }
  onChange(event) {
    const reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onloadend = () => this.profileForm.get('avatar').patchValue(reader.result);
    console.log('formValue', this.profileForm.get('avatar').value);
  }
  public onSubmit() {
    console.log(this.profileForm.value);
    this.http.patch(ApiUrls.profile, this.profileForm.value).subscribe(
      response => console.log(response),
      error1 => console.log(error1),
      () => console.log('hello')
    );
  }
}
