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

  private apiURL = environment.apiURL + 'category/'

  getAll(): Observable<categoryDTO[]>{
    return this.http.get<categoryDTO[]>(this.apiURL);
  }

  getById(id: number): Observable<categoryDTO> {
    return this.http.get<categoryDTO>(this.apiURL + id);
  }

  post(category: newCategoryDTO){
    return this.http.post(this.apiURL, category);
  }

  put(id: number, category: newCategoryDTO) {
    return this.http.put(this.apiURL + id, category);
  }

  delete(id: number) {
    return this.http.delete(this.apiURL + id);
  }
}



