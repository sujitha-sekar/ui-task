
import { Component, AfterViewInit, ElementRef, HostListener } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent implements AfterViewInit {
  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    gsap.timeline()
      .fromTo(this.el.nativeElement.querySelectorAll('.title-word'), 
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', stagger: 0.1, delay: 0.5 }
      )
      .fromTo(this.el.nativeElement.querySelector('.subtitle'), 
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }, '-=0.3'
      )
      .fromTo(this.el.nativeElement.querySelector('.cta-button'),
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.5, ease: 'back.out(1.7)' }, '-=0.2'
      );
      
      gsap.fromTo(this.el.nativeElement.querySelectorAll('.circle-layer'),
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 1.5,
          ease: 'power1.out',
          stagger: 0.3, 
          delay: 0.8 
        }
      );
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    const offsetX = (event.clientX / window.innerWidth - 0.5) * 2;
    const offsetY = (event.clientY / window.innerHeight - 0.5) * 2;

    const multiplierCenter = 100;
    const multiplierInner = 70;
    const multiplierMiddle = 40;
    const multiplierOuter = 20;

    gsap.to(this.el.nativeElement.querySelector('.circle-center'), {
      x: offsetX * multiplierCenter,
      y: offsetY * multiplierCenter,
      duration: 1.5,
      ease: 'power2.out'
    });
    
    gsap.to(this.el.nativeElement.querySelector('.circle-inner'), {
      x: offsetX * multiplierInner,
      y: offsetY * multiplierInner,
      duration: 1.5,
      ease: 'power2.out'
    });

    gsap.to(this.el.nativeElement.querySelector('.circle-middle'), {
      x: offsetX * multiplierMiddle,
      y: offsetY * multiplierMiddle,
      duration: 1.5,
      ease: 'power2.out'
    });
    
    gsap.to(this.el.nativeElement.querySelector('.circle-outer'), {
      x: offsetX * multiplierOuter,
      y: offsetY * multiplierOuter,
      duration: 1.5,
      ease: 'power2.out'
    });
  }
}