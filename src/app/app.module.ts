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
  SessionListComponent,
  UpvoteComponent,
  VoterService
} from './events/index'

import { JQ_TOKEN, TOASTR_TOKEN, Toastr, CollapsibleWellComponent, ModalTriggerDirective} from './common/index';
import { AppRoutingModule } from './app-routing.module'
import { EventsAppComponent } from './events-app.component'
import { NavbarComponentComponent} from './navbar/navbar-component.component'
import { SideMenuComponent } from './side-menu/side-menu.component'
import { Error404Component } from './errors/404.component'
import { EventRouteActivator } from './events/event-details/event-details.service'
import { AuthService } from './user/auth.service'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateSessionComponent } from './events/event-details/create-session.component';
import { DurationPipe } from './events/shared/duration.pipe'
import { SimpleModelComponent } from './common/simple-modal.component';

//import { ToastrService } from './common/toastr.service'

let toastr: Toastr = window['toastr'];
let jQuery = window['$'];

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
    SessionListComponent,
    CollapsibleWellComponent,
    DurationPipe,
    SimpleModelComponent,
    UpvoteComponent,
    ModalTriggerDirective
  ],
  providers: [
    EventService,
    {provide: TOASTR_TOKEN, useValue: toastr},
    { provide: JQ_TOKEN, useValue: jQuery },
    EventRouteActivator,
    EventListResolver,
    //ToastrService,
    VoterService,
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