import { Component } from "@angular/core";

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'the-app',
  template: `
    <h1>{{title}}</h1>

    <h2>My heroes</h2>
    <ul class="heroes">
      <li *ngFor="let hero of heroes"
        (click)="onSelect(hero)"
        [class.selected]="hero === selectedHero">
        <span class="badge">{{hero.id}}</span> {{hero.name}}
      </li>
    </ul>
    <hero-details [hero]="selectedHero"></hero-details>
  `,
  providers: [HeroService]
})

export class AppComponent implements OnInit {
  title = 'Tour of Heroes';
  heroes: Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService) {};

  //Hooks
  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  };
}
