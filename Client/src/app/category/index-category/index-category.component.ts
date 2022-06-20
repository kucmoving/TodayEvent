import { Component, OnInit } from '@angular/core';
import { categoryDTO } from 'src/app/_model/newCategoryDTO';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-index-category',
  templateUrl: './index-category.component.html',
  styleUrls: ['./index-category.component.css']
})
export class IndexCategoryComponent implements OnInit {

  category: categoryDTO[]=[];
  columnsToDisplay = ['name', 'actions'];

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.loadCategory();

  }

  loadCategory(){
    this.categoryService.getAll().subscribe(category => {
      this.category = category;
      console.log(this.category);
    });
  }

  delete(id: number){
    this.categoryService.delete(id)
    .subscribe(()=>{
      this.loadCategory();
    })
  }
}
