import { Component } from '@angular/core';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { WhyMeSectionComponent } from './why-me-section/why-me-section.component';

@Component({
  selector: 'app-main-content',
  imports: [HeroSectionComponent, WhyMeSectionComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

}
