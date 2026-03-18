import { Component } from '@angular/core';
import { EducationCardComponent } from '../education-card/education-card';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [
    EducationCardComponent,
  ],
  templateUrl: './education.html',
  styleUrls: ['./education.scss'],
})
export class EducationComponent {
  title: string = 'Formations';

  educations = [
    {
      school: 'ENSEIRB-MATMECA',
      schoolLogo: '/assets/enseirb.png',
      startYear: 2022,
      endYear: 2025,
      degree: 'Diplôme d\'Ingénieur Réseaux et Informatique',
    },
    {
      school: 'Lycée César Baggio',
      schoolLogo: '/assets/cesar-baggio.png',
      startYear: 2021,
      endYear: 2022,
      degree: 'CPGE ATS (Adaptation Technicien Supérieur)',
    },
    {
      school: 'Lycée Saint Cricq',
      schoolLogo: '/assets/saint-cricq.jpg',
      startYear: 2019,
      endYear: 2021,
      degree: 'BTS Systèmes Numériques option Informatique et Réseaux',
    },
    {
      school: 'Lycée Saint Cricq',
      schoolLogo: '/assets/saint-cricq.jpg',
      startYear: 2016,
      endYear: 2019,
      degree: 'Baccalauréat Scientifique spécialité Mathématiques',
    }
  ];
}
