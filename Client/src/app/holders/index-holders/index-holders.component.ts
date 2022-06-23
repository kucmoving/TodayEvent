import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
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
  columnsToDisplay = ['name', 'actions'];
  totalAmountOfRecords : any;
  currentPage = 1;
  pageSize = 5;

  ngOnInit(): void {
    this.loadData();
  }

  loadData(){
    this.holderService.get(this.currentPage, this.pageSize).subscribe((response: HttpResponse<holderDTO[]>) => {
      this.holders = response.body;
      this.totalAmountOfRecords = response.headers.get("totalAmountOfRecords");
    });
  }

  updatePagination(event: PageEvent){
    this.currentPage = event.pageIndex + 1;
    this.pageSize = event.pageSize;
    this.loadData();
  }

  delete(id: number){
    this.holderService.delete(id).subscribe(()=>{
      this.loadData();
    });
  }


}
