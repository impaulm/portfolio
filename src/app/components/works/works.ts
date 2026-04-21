import { Component, Input } from '@angular/core';
import { WorkCardComponent } from '../work-card/work-card';
import { Work } from '../../models/portfolio-data.model';

@Component({
  selector: 'app-works',
  imports: [
    WorkCardComponent,
  ],
  templateUrl: './works.html',
  styleUrls: ['./works.scss'],
})
export class WorksComponent {
  title = 'Projets';
  @Input({ required: true }) works!: Work[];
}
