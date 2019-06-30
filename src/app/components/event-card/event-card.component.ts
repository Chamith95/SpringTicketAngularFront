import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.css']
})
export class EventCardComponent implements OnInit {

  
  @Input() event: any;
  constructor(private router:Router) { }

  ngOnInit() {
  }

  updateEvent(id){
    this.router.navigate(['updateEvent',id])
  }

}
