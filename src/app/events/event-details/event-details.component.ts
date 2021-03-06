import { Component } from '@angular/core'
import { EventService } from '../shared/event.service'
import { ActivatedRoute, Params } from '@angular/router'
import { IEvent, ISession } from '../shared'
import { SessionListComponent } from './session-list.component'

@Component({
    selector: 'event-details',
    templateUrl: './event-details.component.html',
    styles: [`
    .back{ margin-top:10px; }
     a{ cursor: pointer; }
  `]
})
export class EventDetailsComponent {
    
    event: IEvent
    addMode: boolean
    filterBy: string = 'all'
    sortBy: string = ''
    constructor(private eventService: EventService, private activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        this.activatedRoute.params.forEach((params: Params) => {
            this.event = this.eventService.getEvent(Number(params['eventId']))
            this.addMode = false;
        })
       
       //this.event = this.eventService.getEvent(+this.activatedRoute.snapshot.params['eventId'])
    }

    addSession(){
        this.addMode = !this.addMode
    }

    saveNewSession(session: ISession){
        const nextId = Math.max.apply(null, this.event.sessions.map(s => s.id))
        session.id = nextId + 1
        this.event.sessions.push(session)
        this.eventService.updateEvent(this.event)
        this.addMode = false
    }

    cancelAddSession(){
        this.addMode = false
    }
}