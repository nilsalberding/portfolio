import { Component } from '@angular/core';
import { DescriptionComponent } from './description/description.component';
import { ViewComponent } from './view/view.component';

@Component({
  selector: 'app-single-project',
  imports: [DescriptionComponent, ViewComponent],
  templateUrl: './single-project.component.html',
  styleUrl: './single-project.component.scss'
})
export class SingleProjectComponent {

  

}
