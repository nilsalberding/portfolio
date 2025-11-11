import { Component } from '@angular/core';
import { HeaderComponent } from '../shared/component/header/header.component';
import { HeaderMobileComponent } from '../shared/component/header-mobile/header-mobile.component';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-legal-notice',
  imports: [HeaderComponent, HeaderMobileComponent, TranslatePipe],
  templateUrl: './legal-notice.component.html',
  styleUrl: './legal-notice.component.scss'
})
export class LegalNoticeComponent {

}
