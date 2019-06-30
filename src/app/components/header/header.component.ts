import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { SignupdialogComponent } from '../signupdialog/signupdialog.component';
import { Overlay } from '@angular/cdk/overlay';
import { User } from 'src/app/classes/user';
import { LogindialogComponent } from '../logindialog/logindialog.component';
import { OrganizationService } from 'src/app/services/organization.service';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  animal: string;
  name: string;
  user:User;
  orgLogggedin=false;
  userLogggedin=false;


  constructor(public dialog: MatDialog,private userService:UserService,private OrgService:OrganizationService,private router:Router) { }

  ngOnInit() {
    this.userLogggedin=this.userService.isUserLoggedIn();
    this.orgLogggedin=this.OrgService.isOrgLoggedIn();
    console.log(this.userLogggedin);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(SignupdialogComponent, {
      width: '700px',
      // data: {firstName: this.user.firstName, lastName: this.user.lastName}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.user = result;
    });
  }

  openLoginDialog(): void {
    const dialogRef = this.dialog.open(LogindialogComponent, {
      width: '700px',
      // data: {firstName: this.user.firstName, lastName: this.user.lastName}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.user = result;
    });
  }

  userlogout(){
    this.userService.logout()
    this.userLogggedin=false;
  }

  orglogout(){
    this.OrgService.logout();
    this.orgLogggedin=false;
    this.router.navigate([''])
  }
  

}
