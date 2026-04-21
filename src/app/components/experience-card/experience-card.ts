import { DatePipe } from '@angular/common';
import { Experience } from '../../models/portfolio-data.model';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-experience-card',
  standalone: true,
  imports: [
    DatePipe,
  ],
  templateUrl: './experience-card.html',
  styleUrls: ['./experience-card.scss'],
})
export class ExperienceCardComponent {
  @Input({ required: true }) experience!: Experience;

  isOpen = false;

  toggleDescription() {
    this.isOpen = !this.isOpen;
  }
}
