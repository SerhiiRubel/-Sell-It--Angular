import {Component, OnInit} from '@angular/core';
import {ProductDataService} from '../core/services/productData.service';
import {ActivatedRoute} from '@angular/router';
import {Product} from '../core/models/product';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.scss']
})
export class DetailPageComponent implements OnInit {
  private product: Product;
  constructor(
    private productDataService: ProductDataService,
    private route: ActivatedRoute
  ) {}
  ngOnInit() {
    this.route.data.subscribe(
      (response) => {
        this.product = response.product;
        console.log(response);
      }
    );
  }
}
