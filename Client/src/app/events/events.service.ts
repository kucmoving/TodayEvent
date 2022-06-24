import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { formatDateFormData } from '../items/input-img/utils';
import { EventPOstGetDTO, newEventDTO } from '../_model/newEventDTO';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor(private http: HttpClient) { }
  private apiURL = environment.apiURL + 'event/';

  postGet(): Observable<EventPOstGetDTO>{
    return this.http.get<EventPOstGetDTO>(this.apiURL + 'postget');
  }

  post(newEventDTO: newEventDTO): Observable<number> {
    const formData = this.BuildFormData(newEventDTO);
    return this.http.post<number>(this.apiURL, formData);
  }




  private BuildFormData(event: newEventDTO): FormData {
    const formData = new FormData();

    formData.append('title', event.title);
    formData.append('introduction', event.introduction);
    formData.append('video', event.video);
    formData.append('confirm', String(event.confirm));
    if (event.startingDate){
      formData.append('startingDate', formatDateFormData(event.startingDate));
    }

    if (event.picture){
      formData.append('picture', event.picture);
    }

    formData.append('categoryIds', JSON.stringify(event.categoryIds));
    formData.append('eventLocationIds', JSON.stringify(event.eventLocationIds));
    formData.append('holders', JSON.stringify(event.holders));

    return formData;
  }
}


