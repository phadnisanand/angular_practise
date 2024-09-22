import { Directive,ElementRef,HostListener } from '@angular/core';

@Directive({
  selector: '[appCustom]'
})
export class CustomDirective {

  constructor(private element:ElementRef) { }
  @HostListener('mouseenter')
  CustomMouseEnter():void{
    this.element.nativeElement.style.backgroundColor='yellow';
  }
  @HostListener('mouseleave')
  CustomMouseExit():void{
    this.element.nativeElement.style.backgroundColor='red';
  }
}
