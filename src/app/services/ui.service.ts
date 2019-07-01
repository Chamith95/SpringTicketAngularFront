import { Injectable } from '@angular/core';
import { MatSnackBar,MatSnackBarConfig } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class UiService {

  constructor(private snackbar: MatSnackBar) { }

  sucConfig:MatSnackBarConfig={
    duration:3000,
    horizontalPosition:'right',
    verticalPosition:'top'
  }

  success(msg){
    this.sucConfig['panelClass']=['notification','success']
    this.snackbar.open(msg,"",this.sucConfig)
  }

  showSnackbar(message, action, duration) {
    this.snackbar.open(message, action, {
      duration: duration
    })
  }

}
