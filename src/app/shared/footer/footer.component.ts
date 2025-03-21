import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  activeButton: string | null = null;
  constructor(
    private router: Router,
    private translate: TranslateService,
    private viewportScroller: ViewportScroller
  ) {}
  navigateToMainPage() {
    this.router.navigate(['/imprint']).then(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
  changeLanguage(language: string) {
    this.activeButton = language;
    this.translate.use(language);
  }
}
