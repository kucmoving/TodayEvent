import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { multiSelector } from 'src/app/_model/multiSelector';
import { newEventDTO } from 'src/app/_model/newEventDTO';
import { holderEventDTO } from 'src/app/_model/newHolderDTO';


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


  @Input()
  nonSelectedCategory : multiSelector[] = [];
  @Input()
  selectedCategory : multiSelector[] = [];

  @Input()
  nonSelectedEventLocation: multiSelector[] = [];
  @Input()
  selectedEventLocation: multiSelector[] = [];

  @Input()
  selectedHolders : holderEventDTO[]=[];


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
      eventLocationIds: '',
      holders:''
    });

    if (this.model !== undefined){
      this.form.patchValue(this.model);
    }
  }

  onImageSelected(file:any){
    this.form.get('picture').setValue(file);
  }

  saveChanges(){
    const categoryIds = this.selectedCategory.map(value => value.key); // categoryId, receive the key
    this.form.get('categoryIds').setValue(categoryIds); //form set value

    const eventLocationIds = this.selectedEventLocation.map(value => value.key); // eventLocationIds, receive the key
    this.form.get('eventLocationIds').setValue(eventLocationIds); //form set value

    const holders = this.selectedHolders.map(value => {
      return {id: value.id, contactperson: value.contactperson}
    });
    this.form.get('holders').setValue(holders);

    this.onSaveChanges.emit(this.form.value); //to emit
  }
}
