import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { TranslateDirective, TranslatePipe, TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-header',
  imports: [TranslatePipe, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  btnEn = true;
  btnDe = false;

  private translate = inject(TranslateService);

  useLanguage(language: string): void {
    this.translate.use(language);
  }

  setDe(): void {
    this.btnDe = true;
    this.btnEn = false;
  }

  setEn(): void {
    this.btnDe = false;
    this.btnEn = true;
  }
}
