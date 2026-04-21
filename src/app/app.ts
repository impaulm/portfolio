import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { HeaderComponent } from './components/header/header';
import { AboutMeComponent } from './components/about-me/about-me';
import { ExperiencesComponent } from './components/experiences/experiences';
import { EducationComponent } from './components/education/education';
import { SkillsComponent } from './components/skills/skills';
import { LanguagesComponent } from './components/languages/languages';
import { WorksComponent } from './components/works/works';
import { PortfolioDataService } from './services/portfolio-data.service';
import { PortfolioData } from './models/portfolio-data.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    AboutMeComponent,
    ExperiencesComponent,
    EducationComponent,
    SkillsComponent,
    LanguagesComponent,
    WorksComponent
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class AppComponent{
  private portfolioDataService = inject(PortfolioDataService);

  portfolioData = toSignal<PortfolioData | undefined>(
    this.portfolioDataService.getPortfolioData(),
    { initialValue: undefined }
  );
}
