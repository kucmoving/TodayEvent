import { Component, OnInit } from '@angular/core';
import { holderDTO } from 'src/app/_model/newHolderDTO';
import { HolderService } from '../holder.service';

@Component({
  selector: 'app-index-holders',
  templateUrl: './index-holders.component.html',
  styleUrls: ['./index-holders.component.css']
})
export class IndexHoldersComponent implements OnInit {

  constructor(private holderService: HolderService) { }
  holders: any;
  columnsToDisplay=["name", "actions"];


  ngOnInit(): void {
    this.holderService.get().subscribe((holders: holderDTO[]) =>{
      this.holders = holders;
    })
  }

}
