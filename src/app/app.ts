import { Component, signal } from '@angular/core';
import { HeaderComponent } from './header/header';
import { AboutMeComponent } from './about-me/about-me';
import { ExperiencesComponent } from './experiences/experiences';
import { EducationComponent } from './education/education';
import { SkillsComponent } from './skills/skills';
import { LanguagesComponent } from './languages/languages';
import { WorksComponent } from './works/works';

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    AboutMeComponent,
    ExperiencesComponent,
    EducationComponent,
    SkillsComponent,
    LanguagesComponent,
    WorksComponent,
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {
}
