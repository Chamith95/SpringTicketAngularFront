import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {map} from 'rxjs/operators';


export const TOKEN='token'
export const AUTHENTICATED_USER ='authenticatedUser'

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

  test(){
    return this.http.get(`http://localhost:8080/users/`).subscribe(
      data=>{
        console.log(data);
      }
    )  
  }

  loginUser(credentials){
    console.log(credentials);

    return this.http.post<any>(`http://localhost:8080/login`,credentials,{
      headers: new HttpHeaders()
          .set('Content-Type', 'application/json'),
      observe: 'response'
  })
  .pipe(map(res => {
      let myHeader = res.headers.get('Authorization');
      let user=res.headers.get('UserId');
      sessionStorage.setItem(AUTHENTICATED_USER,user);
      sessionStorage.setItem(TOKEN,myHeader);
      console.log(user);
      console.log(myHeader);
  }))

  }

  getAuthenticatedUser(){
    return sessionStorage.getItem(AUTHENTICATED_USER)
    }
  
    getAuthenticatedToken(){
          return sessionStorage.getItem(TOKEN)
     }
  
     isUserLoggedIn() {
      let user = sessionStorage.getItem(AUTHENTICATED_USER);
      return !(user === null);
    }

    logout() {
      sessionStorage.removeItem(AUTHENTICATED_USER);
      sessionStorage.removeItem(TOKEN);
    }

  }

