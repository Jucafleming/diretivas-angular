import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[Highlight]'
})
export class HighlightDirective {
  @HostListener('mouseenter') onMouseOver(){
    // this.renderer.setStyle(this._elementRef.nativeElement, 
    //   'background-color', 'yellow')
    this.backgroundColor = this.highlightColor
  }
  @HostListener('mouseleave') onMouseLeave(){
    // this.renderer.setStyle(this._elementRef.nativeElement, 
    //   'background-color', 'white')
    this.backgroundColor = this.defaultColor
  }
  //@HostBinding('style.background-color') backgroundColor: string | undefined;
  @HostBinding('style.background-color') get setColor(){
    return this.backgroundColor
  }
 
  backgroundColor: string = ''

  @Input() defaultColor: string='white'
  @Input() highlightColor: string='yellow'

  constructor() { }
  ngOnInit(){
    this.backgroundColor = this.defaultColor
  }
}
