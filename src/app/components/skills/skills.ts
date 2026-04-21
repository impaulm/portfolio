import { Component, Input } from '@angular/core';
import { SkillBadgeComponent } from '../skill-badge/skill-badge';
import { SkillsData } from '../../models/portfolio-data.model';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [
    SkillBadgeComponent
  ],
  templateUrl: './skills.html',
  styleUrls: ['./skills.scss'],
})
export class SkillsComponent {
  title = 'Compétences techniques';
  @Input({ required: true }) skills!: SkillsData;
}
