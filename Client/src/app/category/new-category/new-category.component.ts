import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { parseWebAPIErrors } from 'src/app/items/input-img/utils';
import { newCategoryDTO } from 'src/app/_model/newCategoryDTO';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-new-category',
  templateUrl: './new-category.component.html',
  styleUrls: ['./new-category.component.css']
})
export class NewCategoryComponent implements OnInit {

  errors: string[]=[];

  constructor(private router: Router, private categoryService: CategoryService) { }

  ngOnInit(): void {
  }

  saveChanges(newCategoryDTO: newCategoryDTO){
    this.categoryService.post(newCategoryDTO).subscribe(()=>{
      this.router.navigate(['/category']);
    }, error => this.errors = parseWebAPIErrors(error));
  }
}
