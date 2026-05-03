import { Component, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
})
export class NavComponent {
  isMenuOpen = false;

  constructor(private readonly el: ElementRef<HTMLElement>) {}

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    if (!this.el.nativeElement.contains(event.target as Node)) {
      this.isMenuOpen = false;
    }
  }
}
