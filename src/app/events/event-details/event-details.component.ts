import { Component } from '@angular/core'
import { EventService } from '../shared/event.service'
import { ActivatedRoute } from '@angular/router'
import { IEvent } from '../shared'

@Component({
    selector: 'event-details',
    template: `<h4>Event Details</h4>
    <div>
      <div>Event: {{event?.name}}</div>
      <div>Date: {{event?.date}} </div>      
      <div>Time: {{event?.time}}</div>
      <div>Address: {{event?.location.address}}, {{event?.location.city}}, {{event?.location.country}}</div>
    </div>
    <div class="back">
      <a [routerLink]="['/events']">< Back to events</a>
    </div> `,
    
    
    styles: [`
    .back { margin-top:10px; }
  `]
})
export class EventDetailsComponent {
    event: IEvent

    constructor(private eventService: EventService, private activatedRoute: ActivatedRoute) {

    }

    ngOnInit() {
        this.event = this.eventService.getEvent(+this.activatedRoute.snapshot.params['eventId'])
    }

    
}