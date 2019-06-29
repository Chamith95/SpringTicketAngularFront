import { Component, OnInit } from '@angular/core';
import { OrganizationService } from 'src/app/services/organization.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  navisAuth:boolean;

  constructor(private userService:UserService,private orgService:OrganizationService) { }

  ngOnInit() {
    console.log(this.orgService.isOrgLoggedIn())
  }

}
