import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { newCategoryDTO } from 'src/app/_model/newCategoryDTO';

@Component({
  selector: 'app-new-category',
  templateUrl: './new-category.component.html',
  styleUrls: ['./new-category.component.css']
})
export class NewCategoryComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  saveChanges(newCategoryDTO: newCategoryDTO){
    console.log(newCategoryDTO);
    this.router.navigate(['/category']);
  }
}
