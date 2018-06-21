import {Component, OnInit} from '@angular/core';
import {ProductService} from '../core/services/product.service';
import {ActivatedRoute} from '@angular/router';
import {Product} from '../core/models/product';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.scss']
})
export class DetailPageComponent implements OnInit {
  private product: Product;
  constructor(
    private productDataService: ProductService,
    private route: ActivatedRoute
  ) {}
  ngOnInit() {
    this.route.data.subscribe(
      (response) => {
        this.product = new Product(response.product);
        console.log(response);
      }
    );
  }
}
