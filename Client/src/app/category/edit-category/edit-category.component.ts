import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { newCategoryDTO } from 'src/app/_model/newCategoryDTO';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  model: newCategoryDTO = {name: "Sport"};

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {

    })
  }
  saveChanges(){

  }
}
