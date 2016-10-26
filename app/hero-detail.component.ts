import { Component, Input } from '@angular/core';

import { Hero } from './hero';

@Component({
  selector: 'hero-details',
  template: `
    <div *ngIf="hero">
      <h2>{{hero.name}} details!</h2>

      <div><label>id: </label>{{hero.id}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="hero.name" placeholder="name"/>
        <br/>
        <a href="javascript:void(0);" (click)="onClear()">Clear Form</a>
      </div>
    </div>
  `
})

export class HeroDetailComponent {
  @Input() hero: Hero;

  onClear(): void {
    this.hero = null;
  };
}
