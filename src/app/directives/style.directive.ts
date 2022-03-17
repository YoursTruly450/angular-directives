import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2 } from "@angular/core";

@Directive({
  selector: '[appStyle]'
})
export class StyleDirective {
  @Input('appStyle') color: string | null;
  @Input() dStyles: {
    border?: string;
    fontWeight?: string;
    borderRadius?: string;
  };

  @HostBinding('style.color') elColor: string | null = null;

  constructor(private el: ElementRef, private r: Renderer2) {
    // this.r.setStyle(el.nativeElement, 'color', 'blue');
  }

  @HostListener('click', ['$event.target']) onClick(e: Event) {
    console.log(e);
  }

  @HostListener('mouseenter') onEnter() {
    this.elColor = this.color;
    // this.r.setStyle(this.el.nativeElement, 'color', this.color);
    // this.r.setStyle(this.el.nativeElement, 'fontWeight', this.dStyles.fontWeight);
    // this.r.setStyle(this.el.nativeElement, 'borderRadius', this.dStyles.borderRadius);
    // this.r.setStyle(this.el.nativeElement, 'border', this.dStyles.border);
  }

  @HostListener('mouseleave') onLeave() {
    this.elColor = null;
    // this.r.setStyle(this.el.nativeElement, 'color', null);
    // this.r.setStyle(this.el.nativeElement, 'fontWeight', null);
    // this.r.setStyle(this.el.nativeElement, 'borderRaius', null);
    // this.r.setStyle(this.el.nativeElement, 'border', null);
  }
}