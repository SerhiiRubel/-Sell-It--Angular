import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-add-advert-form',
  templateUrl: './add-advert-form.component.html',
  styleUrls: ['./add-advert-form.component.css']
})
export class AddAdvertFormComponent implements OnInit {
  public addAdvert: FormGroup = new FormGroup({
    theme: new FormControl(),
    text: new FormControl(),
    price: new FormControl(),
    currency: new FormControl(),
    contractPrice: new FormControl(),
    location: new FormGroup({
      name: new FormControl()
    }),
    isActive: new FormControl()
  });
  constructor() { }
  ngOnInit() {
  }
  public handleSubmit() {
    console.log(this.addAdvert.value);
  }
}
