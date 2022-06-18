import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  eventsConfirm: any;
  events: any;
  eventsPlanning: any;
  title = 'Client';

  ngOnInit(): void {
    this.eventsConfirm = [{
      title: 'Fund-Raising 2022',
      date: new Date(),
      price: 5,
    },{
      title: 'Sport Day 2022',
      date: new Date(),
      price: 0,
    }];
    this.eventsPlanning = [{
      title: 'Pet-Caring 2022',
      date: new Date(2022-9-12),
      price: 3,
    },{
      title: 'Big-Sale Winter',
      date: new Date(2022-12-12),
      price: 5,
    }];
  }

}
