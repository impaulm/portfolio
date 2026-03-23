import { Component } from '@angular/core';
import { LanguageCardComponent, Language } from '../language-card/language-card';

@Component({
  selector: 'app-languages',
  standalone: true,
  imports: [
    LanguageCardComponent,
  ],
  templateUrl: './languages.html',
  styleUrls: ['./languages.scss'],
})
export class LanguagesComponent {
  title = 'Langues';

  languages: Language[] = [
    {
      name: 'Français',
      flag: '/assets/france.jpeg',
      level: 'Maternelle',
    },
    {
      name: 'Anglais',
      flag: '/assets/english.jpg',
      level: 'B2 (TOEIC 815)',
    },
    {
      name: 'Espagnol',
      flag: '/assets/spain.jpg',
      level: 'A2',
    },
  ];
}
