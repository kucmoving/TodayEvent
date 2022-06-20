import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { newEventLocationDTO } from 'src/app/_model/newEventLocationDTO';

@Component({
  selector: 'app-edit-event-location',
  templateUrl: './edit-event-location.component.html',
  styleUrls: ['./edit-event-location.component.css']
})
export class EditEventLocationComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  model: newEventLocationDTO = {name:"Central Park", latitude:1, longitude:1};

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {

    })
  }
  saveChanges(movieTheater: any){

  }
}
