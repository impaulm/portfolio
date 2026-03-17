import { Component } from '@angular/core';
import { SocialButtonComponent } from '../social-button/social-button';
import { CommonModule } from '@angular/common';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

interface SocialLink {
  url: string;
  icon: any;
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    SocialButtonComponent,
    CommonModule
  ],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class HeaderComponent {
  firstName: string = 'Paul';
  lastName: string = 'Mistou';
  jobTitle: string = 'Développeur Full-Stack';
  profileImage: string = '/assets/profile.png';

  socialLinks: SocialLink[] = [
    {
      icon: faLinkedin,
      url: 'https://www.linkedin.com/'
    },
    {
      icon: faGithub,
      url: 'https://github.com/'
    }
  ];
}