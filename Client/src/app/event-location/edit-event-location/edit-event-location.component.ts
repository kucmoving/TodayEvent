import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-event-location',
  templateUrl: './edit-event-location.component.html',
  styleUrls: ['./edit-event-location.component.css']
})
export class EditEventLocationComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {

    })
  }

}
