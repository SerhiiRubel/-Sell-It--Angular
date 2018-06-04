export class Product {
  public pk: number;
  public owner: Owner[];
  public theme: string;
  public price: number;
  public currency: number;
  public images: Image;
  constructor(json: any) {
    this.pk = json.pk;
    this.owner = json.owner;
    this.theme = json.theme;
    this.price = json.price;
    this.currency = json.currency;
    this.images = new Image(json.images[0]);
  }
}

export class Image {
  public pk: number;
  public advert: number;
  public file: string;
  constructor( json?: any ) {
      if (json) {
        this.pk = json.pk;
        this.advert = json.advert;
        this.file = json.file;
      } else {
        this.pk = null;
        this.advert = null;
        this.file = './../../../assets/img/product1.jpg';
      }
  }
}

export class Owner {
  public avatar: string;
  public email: string;
  public firstName: string;
  public lastName: string;
  public userName: string;
  public id: number;
  constructor(json: any) {
    this.avatar = json.avatar;
    this.email = json.email;
    this.firstName = json.first_name;
    this.lastName = json.last_name;
    this.userName = json.user_name;
    this.id = json.id;
  }
}
