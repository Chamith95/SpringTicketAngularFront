import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule,MatFormFieldModule,MatTabsModule, MatNativeDateModule} from '@angular/material';
import {MatRadioModule} from '@angular/material/radio';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HeaderComponent } from './components/header/header.component';
import {MatDialogModule} from '@angular/material/dialog';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {MatSelectModule} from '@angular/material/select'; 
import {MatDatepickerModule} from '@angular/material/datepicker';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignupdialogComponent } from './components/signupdialog/signupdialog.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import {MatInputModule} from '@angular/material';
import { LogindialogComponent } from './components/logindialog/logindialog.component';
import { HttpInterceptorService } from './services/http-interceptor.service';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { NewEventComponent } from './components/new-event/new-event.component';
import { HomeComponent } from './components/home/home.component';
import { OrghomeComponent } from './components/orghome/orghome.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SignupdialogComponent,
    LogindialogComponent,
    SidenavComponent,
    NewEventComponent,
    HomeComponent,
    OrghomeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatListModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSelectModule,
    FormsModule,
    MatDatepickerModule,
    MatSidenavModule,
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
    SignupdialogComponent,LogindialogComponent
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:HttpInterceptorService,multi:true},   MatDatepickerModule,
 ],
  bootstrap: [AppComponent]
})
export class AppModule { }
