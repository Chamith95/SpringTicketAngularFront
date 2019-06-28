import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { SignupdialogComponent } from '../signupdialog/signupdialog.component';
import { Overlay } from '@angular/cdk/overlay';
import { User } from 'src/app/classes/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  animal: string;
  name: string;
  user:User;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
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
  

}
