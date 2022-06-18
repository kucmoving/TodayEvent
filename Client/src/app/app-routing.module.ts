import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexHoldersComponent } from './actors/index-holders/index-holders.component';
import { NewHoldersComponent } from './actors/new-holders/new-holders.component';
import { EditCategoryComponent } from './category/edit-category/edit-category.component';
import { IndexCategoryComponent } from './category/index-category/index-category.component';
import { NewCategoryComponent } from './category/new-category/new-category.component';
import { EditEventLocationComponent } from './event-location/edit-event-location/edit-event-location.component';
import { IndexEventLocationComponent } from './event-location/index-event-location/index-event-location.component';
import { NewEventLocationComponent } from './event-location/new-event-location/new-event-location.component';
import { EditEventComponent } from './events/edit-event/edit-event.component';
import { NewEventComponent } from './events/new-event/new-event.component';
import { EditHolderComponent } from './holder/edit-holder/edit-holder.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path:'category', component: IndexCategoryComponent},
  { path:'category/new', component: NewCategoryComponent},
  { path:'category/edit/:id', component: EditCategoryComponent},


  { path:'holder', component: IndexHoldersComponent},
  { path:'holder/new', component: NewHoldersComponent},
  { path:'holder/edit/:id', component: EditHolderComponent},


  { path:'eventlocation', component: IndexEventLocationComponent},
  { path:'eventlocation/new', component: NewEventLocationComponent},
  { path:'eventlocation/edit/:id', component: EditEventLocationComponent},


  { path:'events/new', component: NewEventComponent},
  { path:'events/edit/:id', component: EditEventComponent},

  { path:"**", component: HomeComponent}
  //{path: "**", redirectTo: ""}

];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
