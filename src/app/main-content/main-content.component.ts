import { Component } from '@angular/core';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { WhyMeSectionComponent } from './why-me-section/why-me-section.component';
import { SkillsSectionComponent } from './skills-section/skills-section.component';
import { ProjectsSectionComponent } from './projects-section/projects-section.component';
import { CommonModule } from '@angular/common';
import { TeamSectionComponent } from './team-section/team-section.component';
import { ContactSectionComponent } from './contact-section/contact-section.component';
import { HeaderComponent } from '../shared/component/header/header.component';

@Component({
  selector: 'app-main-content',
  imports: [CommonModule, HeroSectionComponent, WhyMeSectionComponent, SkillsSectionComponent, ProjectsSectionComponent, TeamSectionComponent, ContactSectionComponent, HeaderComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

}
