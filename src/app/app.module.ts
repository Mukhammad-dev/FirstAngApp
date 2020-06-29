import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'
import { appRoutes } from './routes'

import{
  EventsListComponent,
  EventThumbnailComponent,
  EventDetailsComponent,
  EventService,
  CreateEventComponent,
  EventListResolver
} from './events/index'

import { AppRoutingModule } from './app-routing.module'
import { EventsAppComponent } from './events-app.component'
import { NavbarComponentComponent} from './navbar/navbar-component.component'
import { SideMenuComponent } from './side-menu/side-menu.component'
// import {  } from './events/events-list.component'
// import {  } from './events/event-details/event-details.component'
// import {  } from './events/shared/event.service'
import { Error404Component } from './errors/404.component'
import { EventRouteActivator } from './events/event-details/event-details.service'
// import {} from './events/create-event.component'
// import {  } from './events/events-list-resolver.service'
import {AuthService} from './user/auth.service'


@NgModule({
  imports: [
    BrowserModule,
   // AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    EventsAppComponent,
    NavbarComponentComponent,
    SideMenuComponent,
    EventsListComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    Error404Component,
    CreateEventComponent
  ],
  providers: [
    EventService,
    EventRouteActivator,
    EventListResolver,
    AuthService,
    {
      provide: 'canDeactivateCreateEvent',
      useValue: checkDirtyState
    }
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }

export function checkDirtyState(component: CreateEventComponent){
  if(component.isDirty)
    return window.confirm('You have not saved this event, do you really want to cancel?')
    return true
}