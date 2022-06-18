import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-recommand',
  templateUrl: './recommand.component.html',
  styleUrls: ['./recommand.component.css']
})
export class RecommandComponent implements OnInit {

  constructor() { }


previousMark = 0;
markArray :any[]=[];

//@Input()
fullMarks = 5;
//@Input()
selectedMark = 0;

@Output()
returnMark: EventEmitter<number> = new EventEmitter<number>();




  ngOnInit(): void {
    this.markArray = Array(this.fullMarks).fill(0);
  }
  handleMouseEnter(index:number){
    this.selectedMark = index + 1;
    console.log(this.selectedMark)
  }

  handleMouseLeave(){
    if (this.previousMark !== 0) {
      this.selectedMark = this.previousMark;
    } else {
      this.selectedMark = 0;
    }
  }

  mark(index: number){
    this.selectedMark = index + 1;
    this.previousMark = this.selectedMark;
    this.returnMark.emit(this.selectedMark);
  }

}
