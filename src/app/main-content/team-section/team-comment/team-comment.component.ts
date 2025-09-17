import { Component, Input } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-team-comment',
  imports: [TranslatePipe],
  templateUrl: './team-comment.component.html',
  styleUrl: './team-comment.component.scss'
})
export class TeamCommentComponent {

  @Input() reference = {
      name: "Nico Dunkler",
      project: "El Pollo Loco",
      text: "team.reference1"
    }

}
