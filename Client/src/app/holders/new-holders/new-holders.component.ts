import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { newHolderDTO } from 'src/app/_model/newHolderDTO';

@Component({
  selector: 'app-new-holders',
  templateUrl: './new-holders.component.html',
  styleUrls: ['./new-holders.component.css']
})
export class NewHoldersComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  saveChange(newHolderDTO: newHolderDTO){
    console.log(newHolderDTO);
    this.router.navigate(['/holder']);


  }

}
