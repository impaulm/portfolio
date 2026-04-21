import { DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Work } from '../../models/portfolio-data.model';

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
