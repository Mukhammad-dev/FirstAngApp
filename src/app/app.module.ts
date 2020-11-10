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
  EventListResolver,
  SessionListComponent
} from './events/index'

import { AppRoutingModule } from './app-routing.module'
import { EventsAppComponent } from './events-app.component'
import { NavbarComponentComponent} from './navbar/navbar-component.component'
import { SideMenuComponent } from './side-menu/side-menu.component'
import { Error404Component } from './errors/404.component'
import { EventRouteActivator } from './events/event-details/event-details.service'
import { AuthService } from './user/auth.service'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateSessionComponent } from './events/event-details/create-session.component';
//import { ToastrService } from './common/toastr.service'


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
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
    CreateEventComponent,
    CreateSessionComponent,
    SessionListComponent
  ],
  providers: [
    EventService,
    EventRouteActivator,
    EventListResolver,
    //ToastrService,
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