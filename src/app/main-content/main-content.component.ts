import { Component } from '@angular/core';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { WhyMeSectionComponent } from './why-me-section/why-me-section.component';
import { SkillsSectionComponent } from './skills-section/skills-section.component';
import { ProjectsSectionComponent } from './projects-section/projects-section.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main-content',
  imports: [CommonModule, HeroSectionComponent, WhyMeSectionComponent, SkillsSectionComponent, ProjectsSectionComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

}
