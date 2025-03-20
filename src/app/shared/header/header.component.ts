import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  isToggle = true;
  activeButton: string | null = null; // Aktiver Button für die Sprachauswahl

  // Korrigierter Konstruktor
  constructor(private router: Router, private translate: TranslateService) {}

  // Methode zum Wechseln der Sprache
  changeLanguage(language: string) {
    this.activeButton = language; // Setze den aktiven Button
    this.translate.use(language); // Wechsle die Sprache mit ngx-translate
  }

  // Methode zum Umschalten des Menüs
  toggleMenu() {
    this.isToggle = !this.isToggle;
  }
}
