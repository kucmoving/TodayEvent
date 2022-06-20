import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { newCategoryDTO } from 'src/app/_model/newCategoryDTO';

@Component({
  selector: 'app-form-category',
  templateUrl: './form-category.component.html',
  styleUrls: ['./form-category.component.css']
})
export class FormCategoryComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  @Input()
  model:any;

  form:any = FormGroup;

  @Output()
  onSaveChanges: EventEmitter<newCategoryDTO> = new EventEmitter<newCategoryDTO>();


  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name:['', {
        validators:[Validators.required, Validators.minLength(3)]
      }]
    });

    if(this.model !== undefined){
      this.form.patchValue(this.model);
    }
  }

  saveChanges(){
    this.onSaveChanges.emit(this.form.value);
  }
  getErrorMessageFieldName(){
    const field = this.form.get('name');
    if(field.hasError('required')){
      return 'The name field is required';
    }

    if (field.hasError('minLength')){
      return 'The minimum Length is 3';
    }
    return '';
  }

}
