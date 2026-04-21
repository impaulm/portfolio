import { Component, Input } from '@angular/core';
import { SocialButtonComponent } from '../social-button/social-button';
import { HeaderData } from '../../models/portfolio-data.model';
import { CommonModule } from '@angular/common';

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
  @Input({ required: true }) data!: HeaderData;
}