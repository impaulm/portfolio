import { Component, signal } from '@angular/core';
import { HeaderComponent } from './header/header';
import { AboutMeComponent } from './about-me/about-me';
import { ExperiencesComponent } from './experiences/experiences';

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    AboutMeComponent,
    ExperiencesComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
}
