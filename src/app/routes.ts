import { Routes } from '@angular/router'

import { CreateEventComponent } from './events/create-event.component'
import { EventsListComponent } from './events/events-list.component'
import { EventDetailsComponent } from './events/event-details/event-details.component'
import { EventRouteActivator } from './events/event-details/event-details.service'
import { Error404Component } from './errors/404.component'
import { EventListResolver } from './events/events-list-resolver.service'
import { CreateSessionComponent } from './events/event-details/create-session.component'

export const appRoutes: Routes = [
    { path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent'] },
    { path: 'events', component: EventsListComponent, resolve: { events: EventListResolver } },
    { path: 'events/:eventId', component: EventDetailsComponent, canActivate: [EventRouteActivator] },
    { path: '', redirectTo: '/events', pathMatch: 'full' },
   // { path: 'events/:eventId', redirectTo: }
    { path: 'events/session/new', component: CreateSessionComponent },
    { path: '404', component: Error404Component },
    { path: 'user', loadChildren: './user/user.module#UserModule' }
]