import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appTooltip]'
})
export class TooltipDirective {
@HostListener('mouseover')onHover(){
  let span = document.createElement('span');
  span.innerHTML = 'Product title 1,Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eligendi possimus fugit laudantium   cupiditate quidem aut nisi et',
  Object.assign(span.style,{
    position: 'absolute',
    top:'-70px',
    backgroundColor:'white',
    color:'red',
    border:'thick double blue',
    height:'85px',
    fontWeight: 'bold'
  });
  
  this.el.nativeElement.appendChild(span);
  console.log('hover');
}

  @HostListener('mouseout') onOut() {
let span = this.el.nativeElement.querySelector('span');
this.el.nativeElement.removeChild(span);
console.log(span);
  
}
  constructor(
private el:ElementRef
  ){
    this.el.nativeElement.style.position = 'relative';
  }
}
