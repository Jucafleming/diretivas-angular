import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[fundoAmarelo]'
})
export class FundoAmareloDirective {

  constructor(private _elementRef: ElementRef, private renderer: Renderer2) {
   // console.log(this._elementRef)
    //this._elementRef.nativeElement.style.backgroundColor='yellow'
    this.renderer.setStyle(this._elementRef.nativeElement, 
      'background-color', 'yellow')
   }

}
