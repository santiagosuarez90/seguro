import { Component, OnInit } from '@angular/core';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { ThemeOptions } from '../../../../../theme-options';
import {Cookie} from "ng2-cookies";
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-box',
  templateUrl: './user-box.component.html',
})
export class UserBoxComponent implements OnInit {

  faCalendar = faCalendar;

  toggleDrawer() {
    this.globals.toggleDrawer = !this.globals.toggleDrawer;
  }

  constructor(public globals: ThemeOptions, private router: Router) {
  }

  ngOnInit() {
  }

  logout() {
    Cookie.deleteAll('/');
    this.router.navigate(['/login']);
  }

}
