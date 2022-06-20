import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { categoryDTO, newCategoryDTO } from '../_model/newCategoryDTO';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  private apiURL = environment.apiURL + 'category'

  getAll(): Observable<categoryDTO[]>{
    return this.http.get<categoryDTO[]>(this.apiURL);
  }

  post(category: newCategoryDTO){
    return this.http.post(this.apiURL, category);
  }
}
