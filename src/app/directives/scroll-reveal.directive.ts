import { Directive, ElementRef, Input, OnDestroy, OnInit } from '@angular/core';

@Directive({
  selector: '[appScrollReveal]',
  standalone: true,
})
export class ScrollRevealDirective implements OnInit, OnDestroy {
  @Input() srDelay = 0;
  @Input() srOrigin: 'bottom' | 'left' | 'right' = 'bottom';

  private observer!: IntersectionObserver;

  constructor(private readonly el: ElementRef<HTMLElement>) {}

  ngOnInit() {
    const el = this.el.nativeElement;

    if (globalThis.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    let transform = 'translateY(50px)';
    if (this.srOrigin === 'left') transform = 'translateX(-50px)';
    else if (this.srOrigin === 'right') transform = 'translateX(50px)';

    el.style.opacity = '0';
    el.style.transform = transform;
    el.style.transition = `opacity 1s ease ${this.srDelay}ms, transform 1s ease ${this.srDelay}ms`;

    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = '1';
          el.style.transform = '';
          this.observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    this.observer.observe(el);
  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }
}
