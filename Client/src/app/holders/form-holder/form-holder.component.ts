import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { newHolderDTO } from 'src/app/_model/newHolderDTO';

@Component({
  selector: 'app-form-holder',
  templateUrl: './form-holder.component.html',
  styleUrls: ['./form-holder.component.css']
})
export class FormHolderComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }
  form:any = FormGroup;
  @Output() saveEmit = new EventEmitter<newHolderDTO>();

  @Input()
  model: any;


  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name:['',{
        validators: [Validators.required]
      }],
      startingDate:''
    });
    if (this.model !== undefined){
      this.form.patchValue(this.model);
    }

  }

  save(){
    this.saveEmit.emit(this.form.value);
  }

}
