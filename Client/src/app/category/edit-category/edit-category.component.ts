import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { categoryDTO, newCategoryDTO } from 'src/app/_model/newCategoryDTO';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,
    private categoryService: CategoryService,
    private router: Router) { }

  model: any;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.categoryService.getById(params.id).subscribe(category => {
        this.model =category;
      })
    });
  }

  saveChanges(newCategoryDTO: newCategoryDTO){
    this.categoryService.put(this.model.id, newCategoryDTO)
    .subscribe(() => {
      this.router.navigate(["/category"]);
    });
  }
}
