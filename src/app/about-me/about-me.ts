import { Component } from '@angular/core';

@Component({
  selector: 'app-about-me',
  imports: [],
  templateUrl: './about-me.html',
  styleUrl: './about-me.scss',
})
export class AboutMeComponent {
  title: string = 'About Me';
  aboutMe: string = 'Développeur polyvalent, je conçois des applications web complètes ainsi que des logiciels performants, en accordant une attention particulière à la structuration et à la qualité du code. Curieux et rigoureux, je peux ainsi aborder des projets variés, du développement d’interfaces web à la conception de solutions logicielles plus bas niveau.';
}
