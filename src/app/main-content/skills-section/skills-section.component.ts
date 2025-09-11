import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-skills-section',
  imports: [TranslatePipe],
  templateUrl: './skills-section.component.html',
  styleUrl: './skills-section.component.scss'
})



export class SkillsSectionComponent {

  icons = [
    {
      path: 'assets/icons/angular.png',
      lable: 'Angular'
    },
    {
      path: 'assets/icons/typescript.png',
      lable: 'TypeScript'
    },
    {
      path: 'assets/icons/javascript.png',
      lable: 'JavaScript'
    },
    {
      path: 'assets/icons/html.png',
      lable: 'HTML'
    },
    {
      path: 'assets/icons/css.png',
      lable: 'CSS'
    },
    {
      path: 'assets/icons/Api.png',
      lable: 'REST-API'
    },
    {
      path: 'assets/icons/firebase.png',
      lable: 'Firebase'
    },
    {
      path: 'assets/icons/git.png',
      lable: 'Git'
    },
    {
      path: 'assets/icons/material.png',
      lable: 'Material Design'
    },
    {
      path: 'assets/icons/scrum.png',
      lable: 'Scrum'
    }
  ];
  
}
