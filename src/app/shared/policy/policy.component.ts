import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-poliecy',
  standalone: true,
  imports: [TranslatePipe, CommonModule],
  templateUrl: './policy.component.html',
  styleUrl: './policy.component.scss',
})
export class PolicyComponent {
  activeButton: string | null = null;
  PRIVACY: any;

  constructor(private translate: TranslateService) {}

  changeLanguage(language: string) {
    this.activeButton = language;
    this.translate.use(language);
  }
}
