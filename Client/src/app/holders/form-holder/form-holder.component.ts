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
  @Output() onSaveChanges = new EventEmitter<newHolderDTO>();

  @Input()
  model: any;


  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name:['',{
        validators: [Validators.required]
      }],
      startingDate:'',
      picture:'',
      introduction:''
    });
    if (this.model !== undefined){
      this.form.patchValue(this.model);
    }

  }
  OnImageSelected(image: any){
    this.form.get('picture').setValue(image);
  }

  onSaveChange(content: any){
    this.form.get("introduction").setValue(content);
  }

  save(){
    this.onSaveChanges.emit(this.form.value);
  }

}
