import {HttpClient} from '@angular/common/http';
import {ApiUrls} from '../api-urls';
import {Injectable} from '@angular/core';
import {Product} from '../models/product';
import {concatMap, map, switchMap, tap} from 'rxjs/operators';
import {FormGroup} from '@angular/forms';
import {from} from 'rxjs';

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
  public addAdvert(form: FormGroup, images: string[]) {
    this.http.post( ApiUrls.adverts, form)
      .subscribe(
      v => {
        let response = v;
        from(images)
          .pipe(
            concatMap( (file) => this.http.post(`${ApiUrls.adverts}/${response['pk']}/image/`, {advert: response, file: file}) )
          ).subscribe(value => console.log(value));
      }
    );
  }
}
