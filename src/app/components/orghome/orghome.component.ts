import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/event.service';
import { OrganizationService } from 'src/app/services/organization.service';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-orghome',
  templateUrl: './orghome.component.html',
  styleUrls: ['./orghome.component.css']
})
export class OrghomeComponent implements OnInit {

  events: any = [];
  constructor(private EventService:EventService,private orgService:OrganizationService,private Uiservice:UiService) { }

  ngOnInit() {
   let orgId=this.orgService.getAuthenticatedOrg();
   this.EventService.getOrgEvents(orgId).subscribe(
     data=>{
       console.log(data);
       this.events=data;
     }
   );

   
  }

  eventChange(id) {
    console.log(id);
    for (let i = 0; i < this.events.length; i++)
      if (this.events[i].eventid == id) {
        this.events.splice(i, 1);
      }
      this.Uiservice.showSnackbar("Event Deleted Successfully",null,3000);
    // this.addalert("success", "you have successfully deleted the event");
  }




}
