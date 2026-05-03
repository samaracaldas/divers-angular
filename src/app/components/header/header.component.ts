import { Component } from '@angular/core';
import { NavComponent } from '../nav/nav.component';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NavComponent, ScrollRevealDirective],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {}
