import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http:HttpClient) { 
  }

  createEvent(event){
    return this.http.post(`http://localhost:8080/events`,event) 
  }

  updateEvent(id,event){
    return this.http.put(`http://localhost:8080/events/${id}`,event) 
  }

  getOrgEvents(id){
    return this.http.get(`http://localhost:8080/events/${id}`);
  }

  getEvents(id){
    return this.http.get(`http://localhost:8080/events/event/${id}`);
  }
}
