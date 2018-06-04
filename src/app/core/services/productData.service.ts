import {HttpClient} from '@angular/common/http';
import {ApiUrls} from '../api-urls';
import {Injectable} from '@angular/core';
import {Product} from '../models/product';
import {map} from 'rxjs/operators';

@Injectable()
export class ProductDataService {
  public productData: Product[] = [];
  constructor(private http: HttpClient) {}
  getData(page: number = 0) {
    const params = {
      limit: '12',
      offset: '0'
    }
    params.offset = +params.limit * page;
    return this.http.get<Product[]>(ApiUrls.adverts, {params: params})
      .pipe(
        map( response => {
          console.log(response);
          response.results.forEach(item => this.productData.push(new Product(item)));
          return this.productData;
        })
      );
  }
  getProduct(id: number) {
    return this.http.get(`${ApiUrls.adverts}/${id}`);
  }
}
