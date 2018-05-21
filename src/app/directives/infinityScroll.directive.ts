import {Directive, ElementRef, HostListener, Renderer2} from '@angular/core';
import {ProductDataService} from '../services/productData.service';

@Directive({
  selector: '[appInfinityScroll]'
})

export class InfinityScrollDirective {
  constructor( private element: ElementRef, private renderer: Renderer2, public productDataService: ProductDataService ) {}

  @HostListener('window: scroll') onScroll() {
    if (window.scrollY + window.innerHeight + 200 > document.body.scrollHeight) {
      this.productDataService.addData(1);
    }
  }
}
