import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [FormsModule, CommonModule, TranslatePipe],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  constructor(private translate: TranslateService) {}

  activeButton: string | null = null;
  changeLanguage(language: string) {
    this.activeButton = language;
    this.translate.use(language);
  }
  skills = [
    {
      name: 'Angular',
      img: 'Angular.png',
    },
    {
      name: 'html',
      img: 'html.png',
    },
    {
      name: 'Api',
      img: 'Api.png',
    },
    {
      name: 'css',
      img: 'css.png',
    },
    {
      name: 'Firebase',
      img: 'Firebase.png',
    },
    {
      name: 'Git',
      img: 'Git.png',
    },
    {
      name: 'JavaScript',
      img: 'JavaScript.png',
    },
    {
      name: 'Material Design',
      img: 'Material_Design.png',
    },
    {
      name: 'TypeScript',
      img: 'TypeScript.png',
    },
    {
      name: 'Boostrap',
      img: 'Bootstrap.png',
    },
  ];
}
