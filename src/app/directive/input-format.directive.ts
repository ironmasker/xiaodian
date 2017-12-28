import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {
  @Input('format') format:string;
  @Input('appInputFormat') format2:string;

  constructor(private el: ElementRef) { }

  @HostListener('focus') onFocus() {
    console.log("on Focus");
  }

  @HostListener('blur') onBlur() {
    console.log("on Blur");
    let value: string = this.el.nativeElement.value;
    if (this.format == "lowercase" || this.format2 == "lowercase") {
      this.el.nativeElement.value = value.toLowerCase();
    } else if (this.format == "uppercase"||this.format2 == "uppercase") {
      this.el.nativeElement.value = value.toUpperCase();
    } 
  }

}
