import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { OrganizationService } from './organization.service';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {

  constructor(private orgService:OrganizationService,private userAuthService:UserService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler){

    // let username ="chamith"
    // let password ="123"
    // let basicAuthHeaderString ="Basic "+window.btoa(username +":"+ password);

    let basicUserAuthHeaderString= this.orgService.getAuthenticatedToken()
    
    let basicOrgAuthHeaderString= (this.userAuthService.getAuthenticatedToken()) ;
    let username =this.userAuthService.getAuthenticatedUser()
    let orgname =this.orgService.getAuthenticatedOrg()
    console.log(basicUserAuthHeaderString);
    

    if(basicUserAuthHeaderString && username){
      request =request.clone({ 
        setHeaders:{
          Authorization:basicUserAuthHeaderString
        }
      })
    }
      else if(basicOrgAuthHeaderString && orgname){
        request =request.clone({ 
          setHeaders:{
            Authorization:basicOrgAuthHeaderString
          }
      })
    
  
    }



    console.log(request);

      return next.handle(request);
      
    


  
}
}
