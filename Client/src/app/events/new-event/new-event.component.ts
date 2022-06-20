import { Component, OnInit } from '@angular/core';
import { newEventLocationDTO } from 'src/app/_model/newEventLocationDTO';

@Component({
  selector: 'app-new-event',
  templateUrl: './new-event.component.html',
  styleUrls: ['./new-event.component.css']
})
export class NewEventComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  saveChanges(eventLocation:any){
    console.log(eventLocation);
  }


}
