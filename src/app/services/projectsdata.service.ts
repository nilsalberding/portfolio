import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectsdataService {

  constructor() { }

  projects = [
    {
      name: "Pokedex",
      img: 'assets/img/pokedex.png',
      duration: 'projects.pokedex.duration',
      about: 'projects.pokedex.about',
      organized: 'projects.pokedex.organized',
      learning: 'projects.pokedex.learning',
      icons:["html.png","css.png","javascript.png"]
    },
    {
      name: "El Pollo Loco",
      img: 'assets/img/elpolloloco.png',
      duration: 'projects.game.duration',
      about: 'projects.game.about',
      organized: 'projects.game.organized',
      learning: 'projects.game.learning',
      icons:["html.png","css.png","javascript.png"]
    },
    {
      name: "Join",
      img: 'assets/img/join.png',
      duration: 'projects.join.duration',
      about: 'projects.join.about',
      organized: 'projects.join.organized',
      learning: 'projects.join.learning',
      icons:["angular.png","typescript.png","firebase.png"]
    }
  ]
}
