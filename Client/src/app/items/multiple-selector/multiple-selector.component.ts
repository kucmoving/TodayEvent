import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-multiple-selector',
  templateUrl: './multiple-selector.component.html',
  styleUrls: ['./multiple-selector.component.css']
})
export class MultipleSelectorComponent implements OnInit {

  constructor() { }

  @Input()
  selectedItems: any;
  @Input()
  nonSelectedItems: any;

  ngOnInit(): void {
  }

  select(item: any, index: number){
    this.selectedItems.push(item);
    this.nonSelectedItems.splice(index, 1);
  }

  deSelect(item: any, index: number){
    this.nonSelectedItems.push(item);
    this.selectedItems.splice(index, 1);
  }

  selectAll(){
    this.selectedItems.push(...this.nonSelectedItems);
    this.nonSelectedItems = [];
  }

  deSelectAll(){
    this.nonSelectedItems.push(...this.selectedItems);
    this.selectedItems = [];
  }

}
