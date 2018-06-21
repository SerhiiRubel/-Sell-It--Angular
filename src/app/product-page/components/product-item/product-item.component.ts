import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {Owner} from '../../../core/models/product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProductItemComponent implements OnInit {
  @Input() title: string;
  @Input() srcImg: string;
  constructor() {}

  ngOnInit() {
  }

}
