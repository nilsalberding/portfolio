import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { LanguageBtnsService } from '../../../services/language-btns.service';

@Component({
  selector: 'app-header-mobile',
  imports: [TranslatePipe, CommonModule],
  templateUrl: './header-mobile.component.html',
  styleUrl: './header-mobile.component.scss'
})
export class HeaderMobileComponent {

  lng = inject(LanguageBtnsService);

  burgerMenuOpen = false;


  private translate = inject(TranslateService);

  useLanguage(language: string): void {
    this.translate.use(language);
  }

  setDe(): void {
    this.lng.lngBtns.de = true;
    this.lng.lngBtns.en = false;
  }

  setEn(): void {
    this.lng.lngBtns.de = false;
    this.lng.lngBtns.en = true;
  }

  showBurgerMenu(){
    this.burgerMenuOpen = true;
  }

  closeBurgerMenu(){
    this.burgerMenuOpen = false;
  }
}
