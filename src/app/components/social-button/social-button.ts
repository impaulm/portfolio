import { Component, Input } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-social-button',
  standalone: true,
  imports: [
    FaIconComponent
  ],
  templateUrl: './social-button.html',
  styleUrl: './social-button.scss',
})
export class SocialButtonComponent {
  @Input() url: string = '';
  @Input() socialName!: string;

  get icon(): IconDefinition {
    switch ((this.socialName || '').toLowerCase()) {
      case 'github':
        return faGithub;
      case 'linkedin':
        return faLinkedin;
      default:
        return faGithub;
    }
  }
}
