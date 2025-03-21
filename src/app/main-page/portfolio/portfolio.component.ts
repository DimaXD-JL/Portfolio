import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [FormsModule, CommonModule, TranslatePipe],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
})
export class PortfolioComponent {
  translate: any;
  activeButton: string | null = null;
  projects = [
    {
      name: 'Join',
      languages: 'Angular | TypeScript | HTML | CSS | Firebase',
      description: 'PROJECTS.JOIN_DESC',
      img: '../../../assets/img/Join.png',
      link: '',
      gitlink: '',
    },
    {
      name: 'El Pollo Loco',
      languages: 'Javascript | HTML | CSS |',
      description: 'PROJECTS.PolloLoco',
      img: '../../../assets/img/ElPolloLoco.png',
      link: '',
      gitlink: '',
    },
    {
      name: 'PokéDex',
      languages: 'JavaScript | HTML | CSS | Api',
      description: 'PROJECTS.POKEDEX_DESC',
      img: '../../../assets/img/PokeDex.png',
      link: 'https://pokedex.dzmitry-stashkevich.de/',
      gitlink: 'https://github.com/DimaXD-JL/Pokedex',
    },
    {
      name: 'NEXT PROJECT',
      languages: 'Angular | React | React-Nativ | Flutter',
      description: 'PROJECTS.SOON',
      img: '../../../assets/img/coming_soon.jpg',
      contact: '#conatct',
    },
  ];

  changeLanguage(language: string) {
    this.activeButton = language;
    this.translate.use(language);
  }
  reverseClass(index: number): string {
    return index % 2 !== 0 ? 'reverse' : '';
  }
  reverseNumber(index: number): string {
    return index % 2 !== 0 ? 'reverse-number' : '';
  }
  reverseBorder(index: number): string {
    return index % 2 !== 0 ? 'reverse-border' : '';
  }
}
