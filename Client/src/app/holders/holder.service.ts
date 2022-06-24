import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { formatDateFormData } from '../items/input-img/utils';
import { holderDTO, holderEventDTO, newHolderDTO } from '../_model/newHolderDTO';

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

  getById(id: number): Observable<holderDTO>{
    return this.http.get<any>(this.apiURL + id);
  }

  searchByName(name:string): Observable<holderEventDTO[]>{
    const headers = new HttpHeaders('Content-Type: application/json');
    return this.http.post<holderEventDTO[]>(this.apiURL+ "searchByName",
    JSON.stringify(name),{headers});
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

    if (holder.introduction){
      formData.append('introduction', holder.introduction);
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
