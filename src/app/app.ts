import { Component, signal } from '@angular/core';
import { HeaderComponent } from './header/header';
import { AboutMeComponent } from './about-me/about-me';
import { ExperiencesComponent } from './experiences/experiences';
import { EducationComponent } from './education/education';

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    AboutMeComponent,
    ExperiencesComponent,
    EducationComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
}
