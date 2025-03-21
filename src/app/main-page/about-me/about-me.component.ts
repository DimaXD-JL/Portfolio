import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss',
})
export class AboutMeComponent {
  activeButton: string | null = null;
  constructor(private translate: TranslateService) {}

  changeLanguage(language: string) {
    this.activeButton = language;
    this.translate.use(language);
  }
}
