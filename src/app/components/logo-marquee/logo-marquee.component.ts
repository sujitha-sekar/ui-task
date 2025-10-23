import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-logo-marquee',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './logo-marquee.component.html',
  styleUrl: './logo-marquee.component.scss'
})
export class LogoMarqueeComponent {
  @ViewChild('marqueeContent') marqueeContent!: ElementRef;

  pauseMarquee() {
    this.marqueeContent.nativeElement.style.animationPlayState = 'paused';
  }

  resumeMarquee() {
    this.marqueeContent.nativeElement.style.animationPlayState = 'running';
  }
}
