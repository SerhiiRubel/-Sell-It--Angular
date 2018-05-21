import {Directive, ElementRef, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[appScrollToTop]'
})

export class ScrollToTopDirective {
  constructor(private element: ElementRef, private renderer: Renderer2) {}
  @HostListener('click') onClick() {
    window.scroll({top: 0, behavior: 'smooth'});
  }

  @HostListener('window:scroll', ['$event']) onScroll() {
    let clientHeight: number = event.target.documentElement.clientHeight;
    let currentScroll: number = event.currentTarget.pageYOffset;
    currentScroll > clientHeight ? this.showBtn('block') : this.showBtn('none');
  }
  private showBtn(value: string) {
    this.renderer.setStyle(this.element.nativeElement, 'display', value);
  }
}
