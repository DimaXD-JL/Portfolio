import { Component } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss',
})
export class ImprintComponent {
  activeButton: string | null = null;

  constructor(private translate: TranslateService) {}

  changeLanguage(language: string) {
    this.activeButton = language;
    this.translate.use(language);
  }
}
