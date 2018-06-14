import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

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
  constructor() {}

  ngOnInit() {
  }
  onChange(event) {
    const reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onloadend = () => this.profileForm.get('avatar').patchValue(reader.result);
    console.log('formValue', this.profileForm.get('avatar').value);
  }
}
