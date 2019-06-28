import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(private http:HttpClient) { 

  }

  createUser(user){
    console.log(user);
    return this.http.post(`http://localhost:8080/users`,user) 
  }
}
