import { Component, Input } from '@angular/core';

export interface Language {
  name: string;
  flag: string;
  level: string;
}

@Component({
  selector: 'app-language-card',
  imports: [],
  templateUrl: './language-card.html',
  styleUrls: ['./language-card.scss'],
})
export class LanguageCardComponent {
  @Input({ required: true }) language!: Language;
}
