import { Component, OnInit } from '@angular/core';
import { EventLocationService } from '../event-location.service';

@Component({
  selector: 'app-index-event-location',
  templateUrl: './index-event-location.component.html',
  styleUrls: ['./index-event-location.component.css']
})
export class IndexEventLocationComponent implements OnInit {

  constructor(private eventLocationService: EventLocationService) { }

  eventLocation : any;
  displayColumns =['name', 'actions'];

  ngOnInit(): void {
    this.eventLocationService.get().subscribe(eventLocation =>
      this.eventLocation = eventLocation);
  }
}
