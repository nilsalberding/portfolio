import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-view',
  imports: [],
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
    icons:["html.png","css.png","javascript.png"]
  };

}
