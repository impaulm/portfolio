import { Component, Input } from '@angular/core';
import { AboutMeData } from '../../models/portfolio-data.model';

@Component({
  selector: 'app-about-me',
  imports: [],
  templateUrl: './about-me.html',
  styleUrl: './about-me.scss',
})
export class AboutMeComponent {
  @Input({ required: true }) data!: AboutMeData;
}
