import { INPUT_MODALITY_DETECTOR_DEFAULT_OPTIONS } from '@angular/cdk/a11y';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-error',
  templateUrl: './display-error.component.html',
  styleUrls: ['./display-error.component.css']
})
export class DisplayErrorComponent implements OnInit {

  @Input()
  errors: string[]=[];

  constructor() { }

  ngOnInit(): void {
  }

}
