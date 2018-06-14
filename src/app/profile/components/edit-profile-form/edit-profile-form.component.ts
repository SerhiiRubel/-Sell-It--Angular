import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-edit-profile-form',
  templateUrl: './edit-profile-form.component.html',
  styleUrls: ['./edit-profile-form.component.scss']
})
export class EditProfileFormComponent implements OnInit {
  public profileForm = new FormGroup({
    username: new FormControl(),
    first_name: new FormControl(),
    last_name: new FormControl(),
    avatar: new FormControl(),
    location: new FormControl(),
    color_scheme: new FormControl(),
    language: new FormControl()
  });

  constructor() { }

  ngOnInit() {
  }
  public onSubmit() {
    console.log(this.profileForm.value);
  }
}
