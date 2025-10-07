import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: '[appDir1]',
})

// attr
export class Dir1 {
  // inject()
  // ele => p
  @Input({
    alias: 'hamada',
    required: true,
  })
  dataColor!: string;

  constructor(private ele: ElementRef) {
    this.ele.nativeElement.style.color = this.dataColor;
    console.log(this.ele.nativeElement);
  }

  // custom event
  @HostListener('mouseover') func() {
    this.ele.nativeElement.style.color = this.dataColor;
    this.ele.nativeElement.style.padding = '100px';
  }

  @HostListener('mouseleave') func2() {
    this.ele.nativeElement.style.color = this.dataColor;
    this.ele.nativeElement.style.padding = '5px';
  }
}
