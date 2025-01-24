import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
})
export class PortfolioComponent {
  project = [
    {
      name: 'Join',
      languages: 'Angular | TypeScript | HTML | CSS | Firebase',
      description:
        'Join is a social media platform that allows users to create an account, post, and comment on other users posts. Users can also like and dislike posts.',
      img: '../../../assets/img/project-test.png',
      link: '',
    },
  ];
}
