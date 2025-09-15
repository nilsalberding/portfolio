import { Component } from '@angular/core';
import { SingleProjectComponent } from './single-project/single-project.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-projects-section',
  imports: [SingleProjectComponent, CommonModule],
  templateUrl: './projects-section.component.html',
  styleUrl: './projects-section.component.scss'
})
export class ProjectsSectionComponent {

  join = true;
  game = false;
  pokedex = false;
  newProject = false;

  setJoin(){
    this.join = true;
    this.game = false;
    this.pokedex = false;
    this.newProject = false;
  }
  setgame(){
    this.join = false;
    this.game = true;
    this.pokedex = false;
    this.newProject = false;
  }
  setPokedex(){
    this.join = false;
    this.game = false;
    this.pokedex = true;
    this.newProject = false;
  }
  setNewProject(){
    this.join = false;
    this.game = false;
    this.pokedex = false;
    this.newProject = true;
  }

}
