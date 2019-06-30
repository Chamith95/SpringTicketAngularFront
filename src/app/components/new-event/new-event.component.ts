import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EventService } from 'src/app/services/event.service';
import { OrganizationService } from 'src/app/services/organization.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new-event',
  templateUrl: './new-event.component.html',
  styleUrls: ['./new-event.component.css']
})
export class NewEventComponent implements OnInit {
  date = new FormControl(new Date());

  id:any

  

  EventForm = new FormGroup({
    name: new FormControl('',Validators.required),
    date: new FormControl(new Date(),Validators.required),
    venue: new FormControl('',Validators.required),
    dresstype: new FormControl('',Validators.required),
    description: new FormControl('',Validators.required),
    ticketcount:new FormControl('',Validators.required)
  });

  constructor(private EventService:EventService,private orgService:OrganizationService,private route:ActivatedRoute) {
   }

  ngOnInit() {
    this.id=this.route.snapshot.params['id']
    if(this.id){
      this.EventService.getEvents(this.id).subscribe(data=>{
        console.log(data);
        let event:any=data
        this.EventForm.setValue({
          name:event.name,
          date:event.date,
          venue:event.venue,
          dresstype:event.dresstype,
          description:event.description,
          ticketcount:event.ticketcount,
        })
      })
    }
    console.log(this.id);
  }

  submit(){
    let orgid=this.orgService.getAuthenticatedOrg();



    if(this.id){
      
    let data={
      name: this.EventForm.get('name').value,
      orgid:orgid,
      date:(this.EventForm.get('date').value),
      venue: this.EventForm.get('venue').value,
      dresstype: this.EventForm.get('dresstype').value,
      description:this.EventForm.get('description').value,
      ticketcount:this.EventForm.get('ticketcount').value,
    }
      this.EventService.updateEvent(this.id,data).subscribe(
        data=>{
          console.log(data);
          this.EventForm.reset()
        }
      )
    }
    else{
      
    let data={
      name: this.EventForm.get('name').value,
      orgid:orgid,
      date:(this.EventForm.get('date').value).toLocaleDateString(),
      venue: this.EventForm.get('venue').value,
      dresstype: this.EventForm.get('dresstype').value,
      description:this.EventForm.get('description').value,
      ticketcount:this.EventForm.get('ticketcount').value,
    }
      this.EventService.createEvent(data).subscribe(
        data=>{
          console.log(data);
          this.EventForm.reset();
        }
      )
    }

    

  }

}
