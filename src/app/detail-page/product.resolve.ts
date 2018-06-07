import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Product} from '../core/models/product';
import {ProductService} from '../core/services/product.service';
import {Observable} from 'rxjs';

@Injectable()
export class ProductResolve implements Resolve<Product> {
  constructor( public productService: ProductService) {}
  resolve (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any>|Promise<any>|any {
    return this.productService.getProduct(route.params.id);
  }
}
