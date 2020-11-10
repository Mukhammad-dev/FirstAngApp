import { Component } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { EventService } from './shared/event.service'
import {EventThumbnailComponent} from './event-thumbnail.component'
import { IEvent } from './index'
//import { ToastrService } from 'common/toaster.service.ts'

@Component({
    selector: 'event-list',
  templateUrl: './events-list.component.html',
    styles: [`
    
  `]
})
export class EventsListComponent {
    events:IEvent[]
    constructor(private eventService: EventService, private route: ActivatedRoute) {

    }
    ngOnInit() {
      //this.eventService.getEvents().subscribe(events => { this.events = events })
        this.events = this.route.snapshot.data['events']
    }

  handleThumbnailClick(eventName){
    //this.toastr.success(eventName)
  }
}