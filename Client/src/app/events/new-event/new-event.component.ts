import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/category/category.service';
import { newCategoryDTO } from 'src/app/_model/newCategoryDTO';

@Component({
  selector: 'app-new-event',
  templateUrl: './new-event.component.html',
  styleUrls: ['./new-event.component.css']
})
export class NewEventComponent implements OnInit {

  constructor(private router: Router, private categoryService: CategoryService) { }

  ngOnInit(): void {
  }

  saveChanges(newCategoryDTO: newCategoryDTO){
    this.categoryService.post(newCategoryDTO).subscribe(()=>{
      this.router.navigate(['/category']);
    }, error => console.error(error));
  }
}
