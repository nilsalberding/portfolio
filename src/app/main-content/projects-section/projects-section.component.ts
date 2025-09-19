import { Component, inject } from '@angular/core';
import { SingleProjectComponent } from './single-project/single-project.component';
import { CommonModule } from '@angular/common';
import { ProjectsdataService } from '../../services/projectsdata.service';


@Component({
  selector: 'app-projects-section',
  imports: [SingleProjectComponent, CommonModule],
  templateUrl: './projects-section.component.html',
  styleUrl: './projects-section.component.scss'
})
export class ProjectsSectionComponent {

  projectsdata = inject(ProjectsdataService);

  join = true;
  game = false;
  pokedex = false;
  newProject = false;

  setJoin() {

    this.projectsdata.projects[0].open = false;
    this.projectsdata.projects[1].open = false;
    this.projectsdata.projects[2].open = true;

    // this.join = true;
    // this.game = false;
    // this.pokedex = false;
    // this.newProject = false;
  }
  setGame() {

    this.projectsdata.projects[0].open = false;
    this.projectsdata.projects[1].open = true;
    this.projectsdata.projects[2].open = false;
    // this.join = false;
    // this.game = true;
    // this.pokedex = false;
    // this.newProject = false;
  }
  setPokedex() {

    this.projectsdata.projects[0].open = true;
    this.projectsdata.projects[1].open = false;
    this.projectsdata.projects[2].open = false;
    // this.join = false;
    // this.game = false;
    // this.pokedex = true;
    // this.newProject = false;
  }
  setNewProject() {
    this.join = false;
    this.game = false;
    this.pokedex = false;
    this.newProject = true;
  }

}
