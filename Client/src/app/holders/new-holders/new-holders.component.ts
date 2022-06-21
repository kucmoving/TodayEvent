import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { newHolderDTO } from 'src/app/_model/newHolderDTO';
import { HolderService } from '../holder.service';


@Component({
  selector: 'app-new-holders',
  templateUrl: './new-holders.component.html',
  styleUrls: ['./new-holders.component.css']
})
export class NewHoldersComponent implements OnInit {

  constructor(private router: Router, private holderService: HolderService) { }

  ngOnInit(): void {
  }

  saveChange(newHolderDTO: newHolderDTO){
    console.log(newHolderDTO);
    this.holderService.post(newHolderDTO).subscribe(()=>{
      this.router.navigate(['/holder']);
    });
  }
}
