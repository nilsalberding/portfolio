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

  translationOn = false;


  private translate = inject(TranslateService);

  useLanguage(language: string): void {
    this.translate.use(language);
    if(language == "de"){
      this.setDe();
    }else if(language == "en"){
      this.setEn();
    }
  }

  setDe(): void {
    this.lng.lngBtns.de = true;
    this.lng.lngBtns.en = false;
    this.translationOn = true;
    this.saveInLocalStorage();
  }

  setEn(): void {
    this.lng.lngBtns.de = false;
    this.lng.lngBtns.en = true;
    this.translationOn = false;
    this.saveInLocalStorage();
  }

  showBurgerMenu() {
    this.burgerMenuOpen = true;
  }

  closeBurgerMenu() {
    this.burgerMenuOpen = false;
  }

  saveInLocalStorage() {
    const json = JSON.stringify(this.translationOn);
    localStorage.setItem('lng', json)
  }

  loadFromLocalStorage() {
    const item = localStorage.getItem('lng');
    if (item) {
      this.translationOn = JSON.parse(item);
    }
  }

  ngOnInit(){
    this.loadFromLocalStorage();
    if(this.translationOn){
      this.useLanguage("de");
    }else{
      this.useLanguage("en");
    }
  }
}
