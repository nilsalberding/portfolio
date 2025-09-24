import { Component } from '@angular/core';
import { HeaderComponent } from '../shared/component/header/header.component';
import { HeaderMobileComponent } from '../shared/component/header-mobile/header-mobile.component';

@Component({
  selector: 'app-legal-notice',
  imports: [HeaderComponent, HeaderMobileComponent],
  templateUrl: './legal-notice.component.html',
  styleUrl: './legal-notice.component.scss'
})
export class LegalNoticeComponent {

}
