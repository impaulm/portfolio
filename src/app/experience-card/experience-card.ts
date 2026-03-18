import { DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';

export interface Experience {
  jobTitle: string;
  company: string;
  companyLogo: string;
  startDate: Date;
  endDate: Date | null;
  description: string[];
}

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
