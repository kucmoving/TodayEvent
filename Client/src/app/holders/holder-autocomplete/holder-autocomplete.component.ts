import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, Input, OnInit, ViewChild} from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatTable } from '@angular/material/table';
import { holderEventDTO } from 'src/app/_model/newHolderDTO';
import { HolderService } from '../holder.service';

@Component({
  selector: 'app-holder-autocomplete',
  templateUrl: './holder-autocomplete.component.html',
  styleUrls: ['./holder-autocomplete.component.css']
})
export class HolderAutocompleteComponent implements OnInit {

  constructor(private holderService: HolderService) { }
  control: FormControl = new FormControl();

  @Input()
  selectedHolders : holderEventDTO []=[];
  holderToDisplay: holderEventDTO []=[];
  columnsToDisplay = ["picture", "name", "ContactPerson", "actions"] // must match html column name

  @ViewChild(MatTable) table: any;

  ngOnInit(): void {
    this.control.valueChanges.subscribe(value => {
      this.holderService.searchByName(value).subscribe(holders =>{
        this.holderToDisplay = holders;
      });                   //once control valuechange!
    })
  }

  optionSelected(event: MatAutocompleteSelectedEvent){
    console.log(event.option.value);
    this.control.patchValue('');

    if (this.selectedHolders.findIndex(x => x.id == event.option.value.id) !== -1){
      return;
    }

    this.selectedHolders.push(event.option.value);
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
