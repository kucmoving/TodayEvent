import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { newEventDTO } from 'src/app/_model/newEventDTO';


@Component({
  selector: 'app-form-event',
  templateUrl: './form-event.component.html',
  styleUrls: ['./form-event.component.css']
})
export class FormEventComponent implements OnInit {


  constructor(private formBuilder: FormBuilder) { }


  @Input()
  model: any;

  @Output()
  onSaveChanges = new EventEmitter<newEventDTO>();

  nonSelectedCategory : any[] = [
    {key:1, value:'Sport'},
    {key:2, value:'Sale'},
    {key:3, value:'Social'}
  ]

  selectedCategory : any[] = [];

  nonSelectedEventLocation: any[] = [
    {key: 1, value: 'Victoria Park'},
    {key: 2, value: 'Valentines Park'},
    {key: 3, value: 'Seven King Park'},
  ]

  selectedEventLocation: any[] = [];


  form:any = FormGroup

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      title: ['',{
        validators: [Validators.required]
      }],
      summary: '',
      confirm: false,
      video: '',
      startingDate: '',
      poster: '',
      categoryIds: '',
      eventLocationIds: ''
    });

    if (this.model !== undefined){
      this.form.patchValue(this.model);
    }
  }

  onImageSelected(file:any){
    this.form.get('poster').setValue(file);
  }

  saveChanges(){
    const categoryIds = this.selectedCategory.map(value => value.key); // categoryId, receive the key
    this.form.get('categoryIds').setValue(categoryIds); //form set value

    const eventLocationIds = this.selectedEventLocation.map(value => value.key); // eventLocationIds, receive the key
    this.form.get('eventLocationIds').setValue(eventLocationIds); //form set value

    this.onSaveChanges.emit(this.form.value); //to emit
  }
}
