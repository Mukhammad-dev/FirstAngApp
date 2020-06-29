import { Component, OnInit } from '@angular/core';
import {AuthService} from '../user/auth.service'

@Component({
  selector: 'app-navbar-component',
  templateUrl: './navbar-component.component.html',
  styleUrls: ['./navbar-component.component.css']
})
export class NavbarComponentComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

}
