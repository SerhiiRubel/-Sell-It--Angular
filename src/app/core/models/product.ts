export class Product {
  public activatedAt: string;
  public category: string;
  public contractPrice: boolean;
  public currency: number;
  public images?: Image[];
  public isActive: boolean;
  public location;
  public owner: Owner;
  public pk: number;
  public price: number;
  public text: string;
  public theme: string;
  constructor(json: any) {
    this.activatedAt = json.activated_at;
    this.category = json.category;
    this.images = json.images;
    this.isActive = json.is_active;
    this.location = json.location;
    this.pk = json.pk;
    this.contractPrice = json.contract_price;
    this.owner = new Owner(json.owner);
    this.theme = json.theme;
    this.price = json.price;
    this.text = json.text;
    this.currency = json.currency;
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
        this.file = './assets/img/no-image.jpg';
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
    this.userName = json.userName;
    this.id = json.id;
  }
}
