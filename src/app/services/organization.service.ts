import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

export const TOKEN='token'
export const AUTHENTICATED_ORG ='authenticatedORG'

@Injectable({
  providedIn: 'root'
})
export class OrganizationService {

  constructor(private http:HttpClient) { 

  }

  createOrganization(org){
    return this.http.post(`http://localhost:8080/Organizations`,org) 
  }

  loginOrg(credentials){
    console.log(credentials);

    return this.http.post<any>(`http://localhost:8080/login`,credentials,{
      headers: new HttpHeaders()
          .set('Content-Type', 'application/json'),
      observe: 'response'
  })
  .pipe(map(res => {
      let myHeader = res.headers.get('Authorization');
      let org=res.headers.get('OrgId');
      sessionStorage.setItem(AUTHENTICATED_ORG,org);
      sessionStorage.setItem(TOKEN,myHeader);
      console.log(org);
      console.log(myHeader);
  }))

  }

  getAuthenticatedOrg(){
    return sessionStorage.getItem(AUTHENTICATED_ORG)
    }
  
    getAuthenticatedToken(){
          return sessionStorage.getItem(TOKEN)
     }
  
     isOrgLoggedIn() {
      let user = sessionStorage.getItem(AUTHENTICATED_ORG);
      return !(user === null);
    }
    
    logout() {
      sessionStorage.removeItem(AUTHENTICATED_ORG);
      sessionStorage.removeItem(TOKEN);
    }


}
