import {IProduct} from '../interfaces/product.interface';

export class ProductDataService {
  private productData: IProduct[] = [
    { title: 'Product title', srcImg: './../../../assets/img/product1.jpg' },
    { title: 'Product title', srcImg: './../../../assets/img/product2.jpg' },
    { title: 'Product title', srcImg: './../../../assets/img/product3.jpg' },
    { title: 'Product title', srcImg: './../../../assets/img/product4.jpg' },
    { title: 'Product title', srcImg: './../../../assets/img/product1.jpg' },
    { title: 'Product title', srcImg: './../../../assets/img/product2.jpg' },
    { title: 'Product title', srcImg: './../../../assets/img/product3.jpg' },
    { title: 'Product title', srcImg: './../../../assets/img/product4.jpg' },
    { title: 'Product title', srcImg: './../../../assets/img/product1.jpg' },
    { title: 'Product title', srcImg: './../../../assets/img/product2.jpg' },
    { title: 'Product title', srcImg: './../../../assets/img/product3.jpg' },
    { title: 'Product title', srcImg: './../../../assets/img/product4.jpg' },
    { title: 'Product title', srcImg: './../../../assets/img/product1.jpg' },
    { title: 'Product title', srcImg: './../../../assets/img/product2.jpg' },
    { title: 'Product title', srcImg: './../../../assets/img/product3.jpg' },
    { title: 'Product title', srcImg: './../../../assets/img/product4.jpg' }
  ];

  public changedData = Object.assign(this.productData);

  public currentPage = 1;
  getData() {
    return this.changedData;
  }
  addData(index: number = 1) {
    if (index > 0) {
      this.currentPage++;
      this.changedData = [...this.changedData, ...this.productData];
    } else {
      this.currentPage--;
    }
    console.log(this.currentPage, this.changedData);
    return this.changedData;
  }
}
