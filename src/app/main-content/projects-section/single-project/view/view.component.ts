import { Component, Input } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-view',
  imports: [TranslatePipe],
  templateUrl: './view.component.html',
  styleUrl: './view.component.scss'
})
export class ViewComponent {

  @Input() project = {
    name: "Pokedex",
    img: 'assets/img/pokedex.png',
    duration: 'projects.pokedex.duration',
    about: 'projects.pokedex.about',
    organized: 'projects.pokedex.organized',
    learning: 'projects.pokedex.learning',
    tech: 'HTML, CSS, JavaScript',
    icons: ["html.png", "css.png", "javascript.png"],
    link: "https://nils-alberding-schulz.developerakademie.net/pokedex/",
    git: "https://github.com/nilsalberding/Pokedex"
  };

}
