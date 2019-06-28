import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

import { FormGroup, FormControl, Form, Validators } from '@angular/forms';
import { User } from 'src/app/classes/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signupdialog',
  templateUrl: './signupdialog.component.html',
  styleUrls: ['./signupdialog.component.css']
})
export class SignupdialogComponent implements OnInit {

  selected = 'Entertainment';
  user:User
  UserForm = new FormGroup({
    firstName: new FormControl('',Validators.required),
    lastName: new FormControl('',Validators.required),
    email: new FormControl('',Validators.required),
    gender: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required),
  });
  
  

  constructor(private userService:UserService) { 

  }

  ngOnInit() {

  }

  submit(){
    console.log("submitclicked")
    console.log(this.UserForm.value)
    if(this.UserForm.valid){
      this.userService.createUser(this.UserForm.value).subscribe(data=>{
        console.log(data);
      });
    }



  }


}
