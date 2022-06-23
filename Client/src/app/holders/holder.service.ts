import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { formatDateFormData } from '../items/input-img/utils';
import { holderDTO, newHolderDTO } from '../_model/newHolderDTO';

@Injectable({
  providedIn: 'root'
})
export class HolderService {

  constructor(private http: HttpClient) { }

  private apiURL = environment.apiURL + 'holder/'

  get(page: any, recordsPerPage: any): Observable<any>{
    let params = new HttpParams();
    params = params.append('page', page.toString());
    params = params.append('recordsPerPage', recordsPerPage.toString());
    return this.http.get<any>(this.apiURL, {observe: 'response', params});
  }

  getById(id: number): Observable<any>{
    return this.http.get<any>(this.apiURL + id);
  }

  post(holder:newHolderDTO){
    const formData = this.buildFormData(holder);
    return this.http.post(this.apiURL, formData);
  }

  edit(id:number, holder:newHolderDTO){
    const formData = this.buildFormData(holder);
    return this.http.put(this.apiURL + id, formData);
  }

  delete(id:number){
    return this.http.delete(this.apiURL + id);
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
