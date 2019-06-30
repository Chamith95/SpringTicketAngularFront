import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewEventComponent } from './components/new-event/new-event.component';
import { HomeComponent } from './components/home/home.component';
import { OrghomeComponent } from './components/orghome/orghome.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'orgHome',component:OrghomeComponent},
  {path:'newEvent',component:NewEventComponent},
  {path:'updateEvent/:id',component:NewEventComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
