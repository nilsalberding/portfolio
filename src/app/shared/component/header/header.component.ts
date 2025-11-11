import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { TranslateDirective, TranslatePipe, TranslateService } from '@ngx-translate/core';
import { LanguageBtnsService } from '../../../services/language-btns.service';


@Component({
  selector: 'app-header',
  imports: [TranslatePipe, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  lng = inject(LanguageBtnsService);

  translationOn = false;

  private translate = inject(TranslateService);

  useLanguage(language: string): void {
    this.translate.use(language);
    if (language == "de") {
      this.setDe();
    } else if (language == "en") {
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

  ngOnInit() {
    this.loadFromLocalStorage();
    if (this.translationOn) {
      this.useLanguage("de");
    } else {
      this.useLanguage("en");
    }
  }

}
