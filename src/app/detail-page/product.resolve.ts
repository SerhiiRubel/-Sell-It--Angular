import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Product} from '../core/models/product';
import {ProductDataService} from '../core/services/productData.service';
import {Observable} from 'rxjs';

@Injectable()
export class ProductResolve implements Resolve<Product> {
  constructor( public productService: ProductDataService) {}
  resolve (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Product>|Promise<Product>|Product {
    return this.productService.getProduct(route.params.id);
  }
}
