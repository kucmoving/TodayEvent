import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-holder',
  templateUrl: './edit-holder.component.html',
  styleUrls: ['./edit-holder.component.css']
})
export class EditHolderComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {

    })
  }

}
