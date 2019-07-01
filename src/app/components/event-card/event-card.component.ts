import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from 'src/app/services/event.service';
import { OrganizationService } from 'src/app/services/organization.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.css']
})
export class EventCardComponent implements OnInit {

  state=false;
  @Input() event: any;
  @Output() eventchange: EventEmitter<any> = new EventEmitter();
  @Output() notloggedin: EventEmitter<any> = new EventEmitter();
  constructor(private router:Router,private EventService:EventService,private OrgService:OrganizationService,private userService:UserService) { }

  ngOnInit() {
    this.OrgService.getAuthenticatedOrg()
  }

  updateEvent(id){
    this.router.navigate(['updateEvent',id])
  }

  deleteEvent(id){
    this.EventService.deleteEvent(id).subscribe(
      data=>{
        this.eventchange.emit(id);
      }
    );
    
  }

  going(id){
    console.log(this.userService.getAuthenticatedUser())
    if(!this.userService.getAuthenticatedUser()){
      this.notloggedin.emit(id);
      console.log("Not loggged")
    }
    else{
      this.state=true;
    }
  }

  notgoing(id){
    this.state=false;
  }

}
