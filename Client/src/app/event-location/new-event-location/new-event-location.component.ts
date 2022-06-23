import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventLocationService } from '../event-location.service';

@Component({
  selector: 'app-new-event-location',
  templateUrl: './new-event-location.component.html',
  styleUrls: ['./new-event-location.component.css']
})
export class NewEventLocationComponent implements OnInit {

  constructor(private eventLocationService: EventLocationService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveChanges(eventLocation:any){
    console.log(eventLocation);
    this.eventLocationService.post(eventLocation).subscribe(()=>
    this.router.navigate(['/eventlocation']));
  }

}
