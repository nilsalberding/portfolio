import { Component, inject, Input } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { ProjectsdataService } from '../../../../services/projectsdata.service';

@Component({
  selector: 'app-description',
  imports: [TranslatePipe],
  templateUrl: './description.component.html',
  styleUrl: './description.component.scss'
})
export class DescriptionComponent {

  @Input() project = {
      name: "Pokedex",
      img: 'assets/img/pokedex.png',
      duration: 'projects.pokedex.duration',
      about: 'projects.pokedex.about',
      organized: 'projects.pokedex.organized',
      learning: 'projects.pokedex.learning',
      icons:["html.png","css.png","javascript.png"],
      tech: 'HTML, CSS, JavaScript',
      open: true,
      link: "http://pokedex.alberding-schulz.de/",
      git: "https://github.com/nilsalberding/Pokedex"
    };

  projectsdata = inject(ProjectsdataService)
}
