import {Component} from '@angular/core';
import {ProductDataService} from '../services/productData.service';
import {IProduct} from '../interfaces/product.interface';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})

export class ProductPageComponent {
  constructor( public productDataService: ProductDataService ) {}
  productList: IProduct[] = this.productDataService.changedData;
}
