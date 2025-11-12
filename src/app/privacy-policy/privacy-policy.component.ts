import { Component } from '@angular/core';
import { HeaderComponent } from '../shared/component/header/header.component';
import { HeaderMobileComponent } from '../shared/component/header-mobile/header-mobile.component';
import { TranslatePipe } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-privacy-policy',
  imports: [HeaderComponent, HeaderMobileComponent, TranslatePipe, CommonModule],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss'
})
export class PrivacyPolicyComponent {

}
