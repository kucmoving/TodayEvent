import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-holder',
  templateUrl: './edit-holder.component.html',
  styleUrls: ['./edit-holder.component.css']
})
export class EditHolderComponent implements OnInit {

  model: any = {name: "SPCA",
  startingDate: new Date(),
picture:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/SPCA.jpg/440px-SPCA.jpg"}

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {

    })
  }

    save(holderChange:any){
    console.log(holderChange);
  }

}
