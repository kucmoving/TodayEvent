import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { multiSelector } from 'src/app/_model/multiSelector';
import { newCategoryDTO } from 'src/app/_model/newCategoryDTO';
import { newEventDTO } from 'src/app/_model/newEventDTO';
import { EventsService } from '../events.service';

@Component({
  selector: 'app-new-event',
  templateUrl: './new-event.component.html',
  styleUrls: ['./new-event.component.css']
})
export class NewEventComponent implements OnInit {

  constructor(private router: Router, private eventService: EventsService) { }

  nonSelectedCategory: multiSelector[]=[];
  nonSelectedEventLocation: multiSelector[]=[];

  ngOnInit(): void {
    this.eventService.postGet().subscribe(response =>{
      this.nonSelectedCategory = response.category.map(category =>{
        return <multiSelector>{key: category.id, value: category.name}
      });
      this.nonSelectedEventLocation = response.eventLocation.map(eventLocation =>{
        return <multiSelector>{key:eventLocation.id, value:eventLocation.name}
      });
    })
  }

  saveChanges(newEventDTO: newEventDTO){
    console.log(newEventDTO);
    this.eventService.post(newEventDTO).subscribe(id => {
      this.router.navigate(['/movie/' + id]);
    })
  }
}
