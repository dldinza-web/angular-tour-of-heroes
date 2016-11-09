import { Component } from '@angular/core'
import { HeroService } from './hero.service';

@Component({
  moduleId: module.id,
  selector: 'the-app',
  templateUrl: 'app.component.html',
  styleUrls: [ 'app.component.css' ],

  providers: [HeroService]
})

export class AppComponent {
  title = 'Tour of Heroes';
}
