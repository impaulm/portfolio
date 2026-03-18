import { Component, Input } from '@angular/core';

export interface Education {
  school: string;
  schoolLogo: string;
  startYear: number;
  endYear: number;
  degree: string;
}

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
