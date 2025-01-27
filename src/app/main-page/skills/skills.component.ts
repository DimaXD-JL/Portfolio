import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
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
