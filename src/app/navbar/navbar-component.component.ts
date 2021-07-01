import { Component, OnInit } from '@angular/core';
import { EventService, ISession } from '../events';
import {AuthService} from '../user/auth.service'

@Component({
  selector: 'app-navbar-component',
  templateUrl: './navbar-component.component.html',
  styleUrls: ['./navbar-component.component.css']
})
export class NavbarComponentComponent implements OnInit {

  searchTerm: string = "";
  foundSessions: ISession[];

  constructor(public authService: AuthService, private eventService: EventService) { }

  ngOnInit() {
  }

  searchSessions(searchTerm){
    this.eventService.searchSessions(searchTerm).subscribe(
        sessions => {
          this.foundSessions = sessions;
          console.log(this.foundSessions);
      });
  }
}