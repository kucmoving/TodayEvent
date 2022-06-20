import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MapLocation } from 'src/app/_model/location';
import { newEventLocationDTO } from 'src/app/_model/newEventLocationDTO';

@Component({
  selector: 'app-location-form',
  templateUrl: './location-form.component.html',
  styleUrls: ['./location-form.component.css']
})
export class LocationFormComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) {}
  form:any = FormGroup;

  @Input()
  model:any;

  initialCoordinates: MapLocation[]=[]

  @Output()
  onSaveChanges = new EventEmitter<newEventLocationDTO>();

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', {
        validators: [Validators.required]
      }],
      longitude: ['', {
        validators: [Validators.required]
      }],
      latitude: ['', {
        validators: [Validators.required]
      }]
    })

    if (this.model !== undefined){
      this.form.patchValue(this.model);
      this.initialCoordinates.push({latitude: this.model.latitude, longitude: this.model.longitude});
    }
  }

  onSelectedLocation(coordinates: any){
    this.form.patchValue(coordinates);
  }

  saveChanges(){
    this.onSaveChanges.emit(this.form.value)
  }
}

