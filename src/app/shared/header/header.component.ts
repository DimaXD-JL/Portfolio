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
    this.viewportScroller.scrollToAnchor(sectionId);
  }

  changeLanguage(language: string) {
    this.activeButton = language;
    this.translate.use(language);
  }

  toggleMenu() {
    this.isToggle = !this.isToggle;
  }
}
