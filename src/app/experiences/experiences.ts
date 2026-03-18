import { Component } from '@angular/core';
import { ExperienceCardComponent, Experience } from '../experience-card/experience-card';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [
    ExperienceCardComponent,
  ],
  templateUrl: './experiences.html',
  styleUrls: ['./experiences.scss'],
})
export class ExperiencesComponent {
  title: string = 'Expériences Professionnelles';

  experiences: Experience[] = [
    {
      jobTitle: 'Apprenti - Ingénieur en développement logiciel',
      company: 'Chantier Naval Couach',
      companyLogo: '/assets/couach.png',
      startDate: new Date('2022-09-01'),
      endDate: new Date('2025-08-28'),
      description: [
        'Développement from-scratch d\'un site de visualisation de données et gestion droits utilisateurs',
        'Collaboration avec différents services pour comprendre les besoins et proposer des solutions adaptées',
        'Stack technique : Vue.js, Node.js, TailwindCSS, InfluxDB, Grafana, MySQL',
      ],
    },
    {
      jobTitle: 'Stagiaire - Développeur Full-Stack',
      company: 'Service Volontaire International',
      companyLogo: '/assets/svi.png',
      startDate: new Date('2025-06-30'),
      endDate: new Date('2025-09-19'),
      description: [
        'Amélioration de l\'interface utilisateur',
        'Collaboration avec d\'autres développeurs pour trouver, valider et implémenter les solutions techniques',
        'Stack technique : HTML, CSS, PHP, MySQL',
      ],
    },
  ];
}
