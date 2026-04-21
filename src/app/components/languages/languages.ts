import { Component, Input } from '@angular/core';
import { LanguageCardComponent } from '../language-card/language-card';
import { Language } from '../../models/portfolio-data.model';

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
  @Input({ required: true }) languages!: Language[];
}
