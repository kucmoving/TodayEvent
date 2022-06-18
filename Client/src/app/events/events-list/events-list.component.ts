import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
  }

  @Input()
  events: any;

  remove(index: number){
    this.events.splice(index, 1);
  }
}
