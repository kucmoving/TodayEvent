import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { eventDTO } from 'src/app/_model/newEventDTO';

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.css']
})
export class EditEventComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  model: eventDTO = {
    title: 'Concert Summer',
    confirm: true,
    introduction: "test",
    startingDate: new Date(),
    video: 'ABCDE',
    picture: 'https://miro.medium.com/max/700/1*ydhn1QPAKsrbt6UWfn3YnA.jpeg'}

    ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {

    })
  }

  onSaveChanges(movieTheater: any){

  }

}
