import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  isToggle = true;

  toggleMenu() {
    this.isToggle = !this.isToggle;
  }
  constructor(private translate: TranslateService) {}
  changeLanguege(languege: string) {
    this.translate.use(languege);
  }
}
