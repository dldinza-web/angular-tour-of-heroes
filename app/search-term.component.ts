import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { Hero } from './hero';
import { HeroSearchService } from './hero-search.service';

@Component({
  moduleId: module.id,
  selector: 'search-term',
  templateUrl: 'search-term.component.html',
  styleUrls: [ 'search-term.component.css' ],

  providers: [ HeroSearchService ]
})

export class SearchTermComponent implements OnInit {
  heroes: Observable<Hero[]>;
  private searchTerms = new Subject<string>();

  constructor(
    private heroSearchService: HeroSearchService,
    private router: Router
  ){}

  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void{
    this.heroes = this.searchTerms.debounceTime(300)
      .distinctUntilChanged()
      .switchMap(
        term => term
          ? this.heroSearchService.search(term)
          : Observable.of<Hero[]>([])
      ).catch(error => {
        console.log('An error occurred', error);
        return Observable.of<Hero[]>([]);
      });
  }

  gotoDetail(hero: Hero): void {
    let link = ['/detail', hero.id];
    this.router.navigate(link);
  }
}
