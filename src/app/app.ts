import { Component, signal } from '@angular/core';
import { HeaderComponent } from './header/header';
import { AboutMeComponent } from './about-me/about-me';

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    AboutMeComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
}
