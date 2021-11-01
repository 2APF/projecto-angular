import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appRed]'
})
export class RedDirective {

  // el e um elemento de referencia
  constructor(private el: ElementRef) { 
    el.nativeElement.style = "#e35e6b";
  }

}
