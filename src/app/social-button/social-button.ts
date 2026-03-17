import { Component, Input } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';

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
  @Input() icon!: IconDefinition;
}
