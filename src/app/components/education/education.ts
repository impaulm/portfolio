import { Component, Input } from '@angular/core';
import { EducationCardComponent } from '../education-card/education-card';
import { Education } from '../../models/portfolio-data.model';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [
    EducationCardComponent,
  ],
  templateUrl: './education.html',
  styleUrls: ['./education.scss'],
})
export class EducationComponent {
  title: string = 'Formations';
  @Input({ required: true }) educations!: Education[];
}
