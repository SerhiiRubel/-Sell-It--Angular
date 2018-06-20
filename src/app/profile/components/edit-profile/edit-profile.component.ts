import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {ProfileService} from '../../../core/services/profile.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {
  public currentUser;
  public profileForm = new FormGroup({
    username: new FormControl(),
    first_name: new FormControl(),
    last_name: new FormControl(),
    avatar: new FormControl(),
    location: new FormGroup({
      name: new FormControl()
    }),
    color_scheme: new FormControl(),
    language: new FormControl()
  })
  constructor(
    private http: HttpClient,
    private profile: ProfileService
  ) {}

  ngOnInit() {
    this.profile.profile.subscribe(
      (v) => this.currentUser = v
    );
  }
  onChange(event) {
    const reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onloadend = () => this.profileForm.get('avatar').patchValue(reader.result);
  }
  public onSubmit() {
    this.profile.editProfile(this.profileForm.value);
  }
}
