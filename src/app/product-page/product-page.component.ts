import {Component, Input, OnInit} from '@angular/core';
import {ProductService} from '../core/services/product.service';
import {Product} from '../core/models/product';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})

export class ProductPageComponent implements OnInit {
  constructor( public productService: ProductService ) {}
  public productList: Product[];
  public page = 0;
  public isLoading = false;
  ngOnInit() {
    this.productService.getData(this.page)
      .subscribe(
        response => {
          this.productList = response;
        },
        (error) => console.log(error),
        () => this.page++);
  }
  getProduct() {
    if (!this.isLoading) {
      this.isLoading = true;
      this.productService.getData(this.page)
        .subscribe(
          response => {
            console.log(response);
            this.productList = [...response];
          },
          err => console.log(err),
          () => {
            this.page++;
            this.isLoading = false;
            }
        );
    }
  }
}
