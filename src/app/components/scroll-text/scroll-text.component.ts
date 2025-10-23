import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-scroll-text',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  templateUrl: './scroll-text.component.html',
  styleUrls: ['./scroll-text.component.scss']
})
export class ScrollTextComponent {}