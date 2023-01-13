import { Directive, HostListener, ElementRef, Renderer2, HostBinding } from '@angular/core';

@Directive({
  selector: '[HighlightMouse]'
})
export class HighlightMouseDirective {

  @HostListener('mouseenter') onMouseOver(){
    // this.renderer.setStyle(this._elementRef.nativeElement, 
    //   'background-color', 'yellow')
    this.backgroundColor = 'yellow'
  }
  @HostListener('mouseleave') onMouseLeave(){
    // this.renderer.setStyle(this._elementRef.nativeElement, 
    //   'background-color', 'white')
    this.backgroundColor = 'white'
  }
  //@HostBinding('style.background-color') backgroundColor: string | undefined;
  @HostBinding('style.background-color') get setColor(){
    return this.backgroundColor
  }
 
  backgroundColor: string =''

  constructor(//private _elementRef: ElementRef, private renderer: Renderer2
  ) 
  { }

}
