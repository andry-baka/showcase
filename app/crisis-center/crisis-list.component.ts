    import {Component, OnInit} from 'angular2/core';
    import {Crisis, CrisisService} from './crisis.service';
    import {Router} from 'angular2/router';
    @Component({
      template: `
        <ul>
          <li *ngFor="#crisis of crises"
            (click)="onSelect(crisis)">
            <span class="badge">{{crisis.id}}</span> {{crisis.name}}
          </li>
        </ul>
      `,
    })
    export class CrisisListComponent implements OnInit {
      crises: Crisis[];
      constructor(
        private _service: CrisisService,
        private _router: Router) {}
      ngOnInit() {
        this._service.getCrises().then(crises => this.crises = crises);
      }
      onSelect(crisis: Crisis) {
        this._router.navigate(['CrisisDetail', { id: crisis.id }]  );
      }
    }