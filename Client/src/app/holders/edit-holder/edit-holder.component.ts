import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-holder',
  templateUrl: './edit-holder.component.html',
  styleUrls: ['./edit-holder.component.css']
})
export class EditHolderComponent implements OnInit {

  model: any = {name: "SPCA", startingDate: new Date()}

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {

    })
  }

    save(holderChange:any){
    console.log(holderChange);
  }

}
