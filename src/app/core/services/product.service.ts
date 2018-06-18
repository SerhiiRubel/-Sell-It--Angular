import {HttpClient} from '@angular/common/http';
import {ApiUrls} from '../api-urls';
import {Injectable} from '@angular/core';
import {Product} from '../models/product';
import {map} from 'rxjs/operators';
import {FormGroup} from '@angular/forms';

@Injectable()
export class ProductService {
  public productData: Product[] = [];
  constructor(private http: HttpClient) {}
  getData(page: number) {
    const params = {
      limit: '12',
      offset: '0'
    }
    params.offset = `${+params.limit * page}`;
    return this.http.get<any>(ApiUrls.adverts, {params: params})
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
  public addAdvert(form: FormGroup) {
    this.http.post( ApiUrls.adverts, form).subscribe(
      response => console.log(response)
    );
  }
}
