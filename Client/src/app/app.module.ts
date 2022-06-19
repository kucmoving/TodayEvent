import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { EventsListComponent } from './events/events-list/events-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './menu/menu.component';
import { MaterialModule } from './material/material.module';
import {MatIconModule} from '@angular/material/icon';
import { RecommandComponent } from './items/recommand/recommand.component';
import { CategoryListComponent } from './items/category-list/category-list.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { IndexCategoryComponent } from './category/index-category/index-category.component';
import { NewCategoryComponent } from './category/new-category/new-category.component';
import { IndexEventLocationComponent } from './event-location/index-event-location/index-event-location.component';
import { NewEventLocationComponent } from './event-location/new-event-location/new-event-location.component';
import { NewEventComponent } from './events/new-event/new-event.component';
import { EditCategoryComponent } from './category/edit-category/edit-category.component';
import { EditEventLocationComponent } from './event-location/edit-event-location/edit-event-location.component';
import { EditEventComponent } from './events/edit-event/edit-event.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EventFilterComponent } from './events/event-filter/event-filter.component';
import { IndexHoldersComponent } from './holders/index-holders/index-holders.component';
import { NewHoldersComponent } from './holders/new-holders/new-holders.component';
import { EditHolderComponent } from './holders/edit-holder/edit-holder.component';
import { FormHolderComponent } from './holders/form-holder/form-holder.component';




@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    MenuComponent,
    RecommandComponent,
    CategoryListComponent,
    HomeComponent,
    IndexCategoryComponent,
    NewCategoryComponent,
    IndexHoldersComponent,
    NewHoldersComponent,
    IndexEventLocationComponent,
    NewEventLocationComponent,
    NewEventComponent,
    EditHolderComponent,
    EditCategoryComponent,
    EditEventLocationComponent,
    EditEventComponent,
    EventFilterComponent,
    FormHolderComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatIconModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
