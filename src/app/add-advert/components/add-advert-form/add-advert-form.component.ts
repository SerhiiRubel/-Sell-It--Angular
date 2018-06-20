import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ProductService} from '../../../core/services/product.service';


@Component({
  selector: 'app-add-advert-form',
  templateUrl: './add-advert-form.component.html',
  styleUrls: ['./add-advert-form.component.scss']
})
export class AddAdvertFormComponent implements OnInit {
  @Output() addAdvertForm = new EventEmitter();
  public images: string[] = [];
  public addAdvert: FormGroup = new FormGroup({
    theme: new FormControl('', [
      Validators.required
    ]),
    text: new FormControl(),
    price: new FormControl(),
    currency: new FormControl('1'),
    contractPrice: new FormControl(),
    // location: new FormGroup({
    //   name: new FormControl('', Validators.required)
    // }),
    isActive: new FormControl()
  });
  constructor(
    private productService: ProductService
  ) { }
  ngOnInit() {
  }
  public imgToArray(e) {
    let images = e.target.files;
    this.images.length = 0;
    for ( let image of images ) {
      const reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onloadend = () => this.images.push(reader.result);
    }
  }
  public handleSubmit() {
    this.addAdvertForm.emit();
    this.productService.addAdvert(this.addAdvert.value, this.images);
  }
}
