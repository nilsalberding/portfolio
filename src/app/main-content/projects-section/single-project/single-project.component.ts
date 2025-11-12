import { Component, inject, Input } from '@angular/core';
import { DescriptionComponent } from './description/description.component';
import { ViewComponent } from './view/view.component';
import { ProjectsdataService } from '../../../services/projectsdata.service';

@Component({
  selector: 'app-single-project',
  imports: [DescriptionComponent, ViewComponent],
  templateUrl: './single-project.component.html',
  styleUrl: './single-project.component.scss'
})
export class SingleProjectComponent {

  projectsdata = inject(ProjectsdataService);
  @Input() project = {
    name: "Pokedex",
    img: 'assets/img/pokedex.png',
    duration: 'projects.pokedex.duration',
    about: 'projects.pokedex.about',
    organized: 'projects.pokedex.organized',
    learning: 'projects.pokedex.learning',
    icons: ["html.png", "css.png", "javascript.png"],
    tech: 'HTML, CSS, JavaScript',
    open: true,
    link: "https://nils-alberding-schulz.developerakademie.net/pokedex/",
    git: "https://github.com/nilsalberding/Pokedex"
  }



}
