import { Component } from '@angular/core';
import { WorkCardComponent, Work } from '../work-card/work-card';

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
  works: Work[] = [
    {
      name: 'Portfolio',
      image: '/assets/portfolio.png',
      startDate: new Date('2026-03-01'),
      endDate: new Date('2026-04-30'),
      description: 'Construit avec Angular et Tailwind CSS, ce portfolio présente mes compétences et projets. Il témoigne également de ma capacité à m\'auto former sur de nouvelles technologies.',
      technologies: ['Angular', 'TypeScript', 'Tailwind CSS'],
    },
    {
      name: 'ClimateGuard',
      image: '/assets/climateguard.png',
      startDate: new Date('2024-10-01'),
      endDate: new Date('2025-06-30'),
      description: 'Application de surveillance de diverses données environnementales, développée lors de mon apprentissage chez Couach et présentée lors de la soutenance de mon diplôme d\'ingénieur. Elle permet de visualiser les données en temps réel et de contrôler les droits d\'accès des utilisateurs.',
      technologies: ['Vue.js', 'Node.js', 'TailwindCSS', 'InfluxDB', 'Grafana', 'MySQL', 'Express.js'],
    },
  ];
}
