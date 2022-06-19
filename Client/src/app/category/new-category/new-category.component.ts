import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-category',
  templateUrl: './new-category.component.html',
  styleUrls: ['./new-category.component.css']
})
export class NewCategoryComponent implements OnInit {

  constructor(private router: Router, private formBuilder: FormBuilder) { }

  form:any = FormGroup;

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name:['', {
        validators:[Validators.required, Validators.minLength(3)]
      }]
    });
  }

  saveChanges(){
    //save the new event
    this.router.navigate(['/category']);
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
