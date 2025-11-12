import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-typewriter',
  templateUrl: './typewriter.component.html',
  styleUrls: ['./typewriter.component.scss']
})
export class TypewriterComponent implements OnInit {

  phases = [
    { icon: 'assets/icons/located.png', textKey: 'about.located' },
    { icon: 'assets/icons/remote.png', textKey: 'about.remote' },
    { icon: 'assets/icons/relocate.png', textKey: 'about.relocate' }
  ];

  currentPhaseIndex = 0;
  displayedText = '';
  typingSpeed = 75;
  deleting = false;
  showCursor = true;

  constructor(private translate: TranslateService) {}

  ngOnInit() {
    this.startTypewriterLoop();
    this.startCursorBlink();
  }

  private async startTypewriterLoop() {
    while (true) {
      const current = this.phases[this.currentPhaseIndex];
      const translatedText = this.translate.instant(current.textKey);

      await this.typeText(translatedText);
      await this.pause(1000);
      await this.deleteText();
      this.nextPhase();
    }
  }

  private async typeText(text: string) {
    this.deleting = false;
    for (let i = 0; i <= text.length; i++) {
      this.displayedText = text.substring(0, i);
      await this.pause(this.typingSpeed);
    }
  }

  private async deleteText() {
    this.deleting = true;
    const text = this.displayedText;
    for (let i = text.length; i >= 0; i--) {
      this.displayedText = text.substring(0, i);
      await this.pause(this.typingSpeed);
    }
  }

  private nextPhase() {
    this.currentPhaseIndex = (this.currentPhaseIndex + 1) % this.phases.length;
  }

  private pause(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  private startCursorBlink() {
    setInterval(() => {
      this.showCursor = !this.showCursor;
    }, 500);
  }
}
