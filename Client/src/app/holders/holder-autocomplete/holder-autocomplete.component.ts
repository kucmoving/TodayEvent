import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit, ViewChild} from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-holder-autocomplete',
  templateUrl: './holder-autocomplete.component.html',
  styleUrls: ['./holder-autocomplete.component.css']
})
export class HolderAutocompleteComponent implements OnInit {

  constructor() { }

  control: FormControl = new FormControl();
  holders = [
    {name: 'ABC Company', picture: 'https://2v1p011c9d9y1a3zveg9dmu6-wpengine.netdna-ssl.com/wp-content/uploads/2020/03/home-type-business.jpg'},
    {name: 'DEF School', picture: 'https://www.greaterlondonproperties.co.uk/wp-content/uploads/2018/08/best-schools-in-Central-London-e1535635435874.jpg'},
    {name: 'GHI NGO', picture: 'https://c.ndtvimg.com/2021-02/0l117eao_world-ngo-day-650_625x300_27_February_21.jpg'}
  ]

  selectedHolders : any[]=[];
  originalHolders = this.holders;
  columnsToDisplay = ["picture", "name", "ContactPerson", "actions"] // must match html column name

  @ViewChild(MatTable) table: any;


  ngOnInit(): void {
    this.control.valueChanges.subscribe(value => {              //once control valuechange!
      this.holders = this.originalHolders;
      this.holders = this.holders.filter(holder => holder.name.indexOf(value) !== -1); //to filter
    })
  }

  optionSelected(event: MatAutocompleteSelectedEvent){
    console.log(event.option.value);
    this.selectedHolders.push(event.option.value);
    this.control.patchValue('');
    if (this.table !== undefined){
      this.table.renderRows();
    }
  }

  remove(holder:any){
    const index = this.selectedHolders.findIndex(a => a.name === holder.name);
    this.selectedHolders.splice(index, 1);
    this.table.renderRows();
  }

  dropped(event: CdkDragDrop<any[]>){
    const previousIndex = this.selectedHolders.findIndex(holder => holder === event.item.data);
    moveItemInArray(this.selectedHolders, previousIndex, event.currentIndex);
    this.table.renderRows();
  }

}
