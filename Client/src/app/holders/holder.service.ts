import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { formatDateFormData } from '../items/input-img/utils';
import { newHolderDTO } from '../_model/newHolderDTO';

@Injectable({
  providedIn: 'root'
})
export class HolderService {

  constructor(private http: HttpClient) { }

  private apiURL = environment.apiURL + 'holder/'

  post(holder:newHolderDTO){
    const formData = this.buildFormData(holder);
    return this.http.post(this.apiURL, formData);
  }


  // to organize formdata
  private buildFormData(holder: newHolderDTO): FormData {
    const formData = new FormData();

    formData.append('name', holder.name);

    if (holder.Introduction){
      formData.append('introduction', holder.Introduction);
    }
    //utils.ts gi1 tackle date problem
    if (holder.startingDate){
      formData.append('startingDate', formatDateFormData(holder.startingDate));
    }

    if (holder.picture){
      formData.append('picture', holder.picture);
    }

    return formData;
  }
}
