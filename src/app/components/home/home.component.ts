import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/event.service';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  events: any = [];
  constructor(private eventService:EventService,private uiService:UiService) { }

  ngOnInit() {
    this.eventService.getAllEvents().subscribe(
      data=>{
        this.events=data;
      }
    )
  }

  notloggedin(id){
    this.uiService.showSnackbar("Please Login to continue",null,3000);
  }
}
