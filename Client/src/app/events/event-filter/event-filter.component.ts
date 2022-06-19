import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-event-filter',
  templateUrl: './event-filter.component.html',
  styleUrls: ['./event-filter.component.css']
})
export class EventFilterComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  form:any = FormGroup;
  categories = [{id:1, name:"Sport"}, {id:2, name:"Society"}];

  events = [
    {title :'Fund-Raising 2022', poster:"https://chaptermentalhealth.org/wp-content/uploads/2020/01/Fundraising-Ideas.jpg"},
    {title :'Sport Day 2022', poster:"https://cdn3.vectorstock.com/i/1000x1000/15/92/sport-day-theme-with-kids-playing-sports-vector-18011592.jpg"},
    {title :'Pet-Caring 2022', poster:"https://static.toiimg.com/thumb/msid-47866605,width-800,height-600,resizemode-75/47866605.jpg"},
    {title :'Big-Sale Winter', poster:"https://media.istockphoto.com/vectors/big-winter-sale-typography-poster-illustration-vector-id497312952?s=612x612"},
  ];

  defaultEvents = this.events;

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      title:'',
      categoryId:0,
      coming:false,
      location:false
    });

    this.form.valueChanges.subscribe((values:any) =>{
      console.log(values);
      this.events = this.defaultEvents;
      this.filterEvents(values);
    })
  }

  //have to make the input and title to lower case or titlecase!!
  filterEvents(values:any){
    if (values.title){
      this.events = this.events.filter(event => event.title.indexOf(values.title) >= 0 );
    }
  }

  resetForm(){
    this.form.reset();
  }
}
