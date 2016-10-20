import { Component } from "@angular/core"

export class Hero {
  id: number;
  name: string;
}

const HEROES: Hero[] = [
  { id: 11, name: 'Mr. Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];

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

    <div *ngIf="selectedHero">
      <h2>{{selectedHero.name}} details!</h2>

      <div><label>id: </label>{{selectedHero.id}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="selectedHero.name" placeholder="name"/>
        <br/>
        <a href="javascript:void(0);" (click)="onClear()">Clear Form</a>
      </div>
    </div>
  `
})

export class AppComponent {
  title = 'Tour of Heroes';

  // hero: Hero = {
  //   id: 1,
  //   name: 'Windstorm'
  // };

  heroes = HEROES;
  selectedHero: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  };

  onClear(): void {
    this.selectedHero = null;
  };
}
