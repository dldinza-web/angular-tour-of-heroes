import { Component, OnInit } from '@angular/core';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  moduleId: module.id,
  selector: 'dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: [ 'dashboard.component.css' ]
})

export class DashboardComponent implements OnInit {
  heroes: Hero[];

  constructor(private heroeService: HeroService){}

  ngOnInit(): void {
    this.getTopHeroes();
  }

  getTopHeroes(): void {
    this.heroeService.getHeroes()
      .then(heroes => this.heroes = heroes.slice(1, 5));
  }
}