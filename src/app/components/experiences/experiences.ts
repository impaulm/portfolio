import { Component, Input } from '@angular/core';
import { ExperienceCardComponent } from '../experience-card/experience-card';
import { Experience } from '../../models/portfolio-data.model';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [
    ExperienceCardComponent,
  ],
  templateUrl: './experiences.html',
  styleUrls: ['./experiences.scss'],
})
export class ExperiencesComponent {
  title: string = 'Expériences Professionnelles';
  @Input({ required: true }) experiences!: Experience[];
}
