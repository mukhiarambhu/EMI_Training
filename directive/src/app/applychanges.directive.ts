import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appApplychanges]',
})
export class ApplychangesDirective {
  constructor(private el: ElementRef) {}
  changes(color: string,width:string,height:string,fontsize:string) {
    this.el.nativeElement.style.color = color;
    this.el.nativeElement.style.width=width
    this.el.nativeElement.style.height=height
    this.el.nativeElement.style.fontSize=fontsize
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.changes('cyan',"300px","280px",'22px');
  }
  @HostListener('mouseleave') onMouseLeave(){
    this.changes('red',"200px","180px",'12px')
  }
}
