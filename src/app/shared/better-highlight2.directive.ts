import { Directive, Input, HostBinding, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight2]'
})
export class BetterHighlight2Directive {
  @Input() defaultColor: string = 'blue';
  @Input() highlightColor: string= 'yellow';
  @HostBinding('style.backgroundColor') backgroundColor: string;

  constructor(private elementRef: ElementRef) { 
  }

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
   // this.elementRef.nativeElement.style.backgroundColor = 'green';

  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.backgroundColor = this.defaultColor;
  }

}
