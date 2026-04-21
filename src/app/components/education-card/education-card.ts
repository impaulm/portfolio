import { Component, Input } from '@angular/core';
import { Education } from '../../models/portfolio-data.model';

@Component({
  selector: 'app-education-card',
  standalone: true,
  imports: [],
  templateUrl: './education-card.html',
  styleUrls: ['./education-card.scss'],
})
export class EducationCardComponent {
  @Input({ required: true }) education!: Education;
}
