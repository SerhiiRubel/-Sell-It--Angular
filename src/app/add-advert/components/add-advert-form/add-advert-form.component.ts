import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {ApiUrls} from '../../../core/api-urls';
import {ProductService} from '../../../core/services/product.service';


@Component({
  selector: 'app-add-advert-form',
  templateUrl: './add-advert-form.component.html',
  styleUrls: ['./add-advert-form.component.scss']
})
export class AddAdvertFormComponent implements OnInit {
  public addAdvert: FormGroup = new FormGroup({
    theme: new FormControl(),
    text: new FormControl(),
    price: new FormControl(),
    currency: new FormControl(),
    contractPrice: new FormControl(),
    location: new FormGroup({
      name: new FormControl('', Validators.required)
    }),
    isActive: new FormControl()
  });
  constructor(
    private productService: ProductService
  ) { }
  ngOnInit() {
  }
  public handleSubmit(form) {
    this.productService.addAdvert(this.addAdvert.value);
  }
}
