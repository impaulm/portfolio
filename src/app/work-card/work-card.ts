import { DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';

export interface Work {
  name: string;
  image: string;
  startDate: Date;
  endDate: Date | null;
  description: string;
  technologies: string[];
}

@Component({
  selector: 'app-work-card',
  standalone: true,
  imports: [
    DatePipe,
  ],
  templateUrl: './work-card.html',
  styleUrls: ['./work-card.scss'],
})
export class WorkCardComponent {
  @Input({ required: true }) work!: Work;
}
