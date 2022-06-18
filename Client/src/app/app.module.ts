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
import { IndexHoldersComponent } from './actors/index-holders/index-holders.component';
import { NewHoldersComponent } from './actors/new-holders/new-holders.component';
import { IndexEventLocationComponent } from './event-location/index-event-location/index-event-location.component';
import { NewEventLocationComponent } from './event-location/new-event-location/new-event-location.component';
import { NewEventComponent } from './events/new-event/new-event.component';
import { EditHolderComponent } from './holder/edit-holder/edit-holder.component';
import { EditCategoryComponent } from './category/edit-category/edit-category.component';
import { EditEventLocationComponent } from './event-location/edit-event-location/edit-event-location.component';
import { EditEventComponent } from './events/edit-event/edit-event.component';


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
    EditEventComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatIconModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
