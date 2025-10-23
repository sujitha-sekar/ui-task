import { Component } from '@angular/core';
import { BentoGridComponent } from './components/bento-grid/bento-grid.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeroComponent } from './components/hero/hero.component';
import { LogoMarqueeComponent } from './components/logo-marquee/logo-marquee.component';
import { ScrollTextComponent } from './components/scroll-text/scroll-text.component';

@Component({
  selector: 'app-root',
  imports: [
    HeroComponent,
    ScrollTextComponent,
    BentoGridComponent,
    LogoMarqueeComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ui-test';
}
