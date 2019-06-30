import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { OrganizationService } from 'src/app/services/organization.service';
import { Router } from '@angular/router';

export const orgLogggedin=false;
export const userLogggedin =false;

@Component({
  selector: 'app-logindialog',
  templateUrl: './logindialog.component.html',
  styleUrls: ['./logindialog.component.css']
})
export class LogindialogComponent implements OnInit {

  orgLogggedin=false;
  userLogggedin=false;


  UserForm = new FormGroup({
    email: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required),
  });

  OrgForm = new FormGroup({
    email: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required),

  });

  constructor(private userService:UserService,private OrgService:OrganizationService,private router:Router) { }

  ngOnInit() {
  }

  submit(){

    if(this.UserForm.valid){
      this.userService.loginUser(this.UserForm.value).subscribe(
        data=>{
          this.userLogggedin=true;
          this.orgLogggedin=false
        },error=>{
          this.userLogggedin=false;
        }
      )
    }

    if(this.OrgForm.valid){
      this.OrgService.loginOrg(this.OrgForm.value).subscribe(
        data=>{
          console.log(data);
          this.orgLogggedin=true
          this.userLogggedin=false;
          this.router.navigate(['orgHome'])
        },error=>{
          this.orgLogggedin=false
        }
      )
    }

  }

}
