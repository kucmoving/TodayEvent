import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { newHolderDTO } from 'src/app/_model/newHolderDTO';
import { HolderService } from '../holder.service';

@Component({
  selector: 'app-edit-holder',
  templateUrl: './edit-holder.component.html',
  styleUrls: ['./edit-holder.component.css']
})
export class EditHolderComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute,
    private holderService: HolderService, private router: Router) { }

  model: any;
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.holderService.getById(params.id).subscribe(holder => this.model = holder);
    })
  }
  save(holderChange:any){
    console.log(holderChange);
  }



  saveChanges(newHolderDTO: newHolderDTO){
    console.log(newHolderDTO);
    this.holderService.edit(this.model.id, newHolderDTO).subscribe(()=>{
      this.router.navigate(['/holder']);
    });
  }

}
