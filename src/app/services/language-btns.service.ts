import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageBtnsService {

  constructor() { }

  lngBtns = {
    de: false,
    en: true
  }

}
