import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { TypewriterComponent } from './typewriter/typewriter.component';

@Component({
  selector: 'app-why-me-section',
  imports: [TranslatePipe, TypewriterComponent],
  templateUrl: './why-me-section.component.html',
  styleUrl: './why-me-section.component.scss'
})
export class WhyMeSectionComponent {

}


