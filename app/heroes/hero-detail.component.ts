    import {Component,  OnInit}  from 'angular2/core';
    import {Hero, HeroService}   from './hero.service';
    import {RouteParams, Router} from 'angular2/router';
    @Component({
      template: `
      <h2>HEROES</h2>
      <div *ngIf="hero">
        <h3>"{{hero.name}}"</h3>
        <div>
          <label>Id: </label>{{hero.id}}</div>
        <div>
          <label>Name: </label>
          <input [(ngModel)]="hero.name" placeholder="name"/>
        </div>
        <button (click)="gotoHeroes()">Back</button>
      </div>
      `,
    })
    export class HeroDetailComponent implements OnInit  {
      hero: Hero;
      constructor(
        private _router:Router,
        private _routeParams:RouteParams,
        private _service:HeroService){}
      ngOnInit() {
        let id = this._routeParams.get('id');
        this._service.getHero(id).then(hero => this.hero = hero);
      }
      gotoHeroes(hero: Hero) {
        let heroId = this.hero ? this.hero.id : null;
    // Pass along the hero id if available
    // so that the HeroList component can select that hero.
    // Add a totally useless `foo` parameter for kicks.
    this._router.navigate(['Heroes',  {id: heroId, foo: 'foo'} ]);
      }
    }