import { Component } from '@angular/core';

@Component({
  selector: 'events-app',
  template: `<app-navbar-component></app-navbar-component>
             <router-outlet></router-outlet>`
})
export class EventsAppComponent {
  title = 'FirstAngApp';
}
