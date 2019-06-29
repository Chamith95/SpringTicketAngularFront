import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SpringTicketBooking';

  constructor(private userService:UserService){

  }

  test(){
    this.userService.test();
  }
}
