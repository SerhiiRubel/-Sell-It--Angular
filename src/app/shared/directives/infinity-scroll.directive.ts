import {Directive, ElementRef, EventEmitter, HostListener, Output, Renderer2} from '@angular/core';
import {ProductService} from '../../core/services/product.service';

@Directive({
  selector: '[appInfinityScroll]'
})

export class InfinityScrollDirective {
  @Output()  scrollDown = new EventEmitter();
  constructor( private element: ElementRef, private renderer: Renderer2, public productDataService: ProductService ) {}
  @HostListener('window: scroll') scroll() {
    if (window.scrollY + window.innerHeight + 200 > document.body.scrollHeight) {
      this.scrollDown.emit();
    }
  }
}
