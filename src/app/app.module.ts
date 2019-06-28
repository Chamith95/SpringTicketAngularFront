import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule,MatFormFieldModule,MatTabsModule} from '@angular/material';
import {MatRadioModule} from '@angular/material/radio';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HeaderComponent } from './components/header/header.component';
import {MatDialogModule} from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import {MatSelectModule} from '@angular/material/select'; 

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignupdialogComponent } from './components/signupdialog/signupdialog.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import {MatInputModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SignupdialogComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSelectModule,
    FormsModule,
    FlexLayoutModule,
    MatRadioModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatCheckboxModule,
    HttpClientModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatDialogModule
  ],
  entryComponents: [
    SignupdialogComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
