import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { newEventLocationDTO } from 'src/app/_model/newEventLocationDTO';
import { EventLocationService } from '../event-location.service';

@Component({
  selector: 'app-edit-event-location',
  templateUrl: './edit-event-location.component.html',
  styleUrls: ['./edit-event-location.component.css']
})
export class EditEventLocationComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,
    private eventLocationService:EventLocationService,
    private router: Router) { }

  model: any;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.eventLocationService.getById(params.id).subscribe(eventLocation =>
        this.model =eventLocation);
    })
  }
  saveChanges(newEventLocationDTO: newEventLocationDTO){
    this.eventLocationService.put(this.model.id, newEventLocationDTO).subscribe(()=>{
      this.router.navigate(['/eventlocation']);
    })
  }
}
