import { Component, inject } from '@angular/core';
import { TeamCommentComponent } from './team-comment/team-comment.component';
import { TranslatePipe } from '@ngx-translate/core';
import { ReferencedataService } from '../../services/referencedata.service';

@Component({
  selector: 'app-team-section',
  imports: [TeamCommentComponent, TranslatePipe],
  templateUrl: './team-section.component.html',
  styleUrl: './team-section.component.scss'
})
export class TeamSectionComponent {

  referenceData = inject(ReferencedataService);

}
