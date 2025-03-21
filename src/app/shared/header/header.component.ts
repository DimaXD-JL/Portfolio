import { Component } from '@angular/core';
import { CommonModule, ViewportScroller } from '@angular/common';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, TranslatePipe, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  isToggle = true;
  activeButton: string | null = null;

  constructor(
    private router: Router,
    private translate: TranslateService,
    private viewportScroller: ViewportScroller
  ) {}

  navigateToMainPage() {
    this.router.navigate(['/']).then(() => {
      this.viewportScroller.scrollToAnchor('hero');
    });
  }

  scrollToSection(sectionId: string) {
    if (this.router.url !== '/') {
      this.router.navigate(['/']).then(() => {
        localStorage.setItem('scrollToSection', sectionId);
      });
      return;
    }

    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        const yOffset = -100; // Anpassen, falls notwendig
        const yPosition =
          element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: yPosition, behavior: 'smooth' });
      }
    });
  }
  changeLanguage(language: string) {
    this.activeButton = language;
    this.translate.use(language);
  }

  toggleMenu() {
    this.isToggle = !this.isToggle;
  }
}
