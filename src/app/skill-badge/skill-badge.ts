import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skill-badge',
  standalone: true,
  imports: [],
  templateUrl: './skill-badge.html',
  styleUrls: ['./skill-badge.scss'],
})
export class SkillBadgeComponent {
  @Input({ required: true }) label!: string;
}
