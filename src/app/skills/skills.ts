import { Component } from '@angular/core';
import { SkillBadgeComponent } from '../skill-badge/skill-badge';

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

  technicalSkills = [
    'JavaScript',
    'TypeScript',
    'Angular',
    'React',
    'Node.js',
    'Vue.js',
    'PHP',
    'MySQL',
    'HTML',
    'CSS',
    'Tailwind CSS',
  ];

  softwareSkills = [
    'Git',
    'GitHub',
    'VS Code',
    'Grafana',
    'InfluxDB',
    'Microsoft 365',
    'Redmine',
  ];
}
