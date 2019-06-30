import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.css']
})
export class EventCardComponent implements OnInit {

  
  @Input() event: any;
  @Output() eventchange: EventEmitter<any> = new EventEmitter();
  constructor(private router:Router,private EventService:EventService) { }

  ngOnInit() {
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

}
