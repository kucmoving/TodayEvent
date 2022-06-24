import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { EventPOstGetDTO } from '../_model/newEventDTO';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor(private http: HttpClient) { }
  private apiURL = environment.apiURL + 'event/';

  public postGet(): Observable<EventPOstGetDTO>{
    return this.http.get<EventPOstGetDTO>(this.apiURL + 'postget');
  }
}
