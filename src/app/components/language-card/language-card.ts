import { Component, Input } from '@angular/core';
import { Language } from '../../models/portfolio-data.model';


@Component({
  selector: 'app-language-card',
  imports: [],
  templateUrl: './language-card.html',
  styleUrls: ['./language-card.scss'],
})
export class LanguageCardComponent {
  @Input({ required: true }) language!: Language;
}
