import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { eventLocationDTO, newEventLocationDTO } from '../_model/newEventLocationDTO';

@Injectable({
  providedIn: 'root'
})
export class EventLocationService {

  constructor(private http: HttpClient) { }

  private apiURL = environment.apiURL + 'eventlocation/'

  get(): Observable<eventLocationDTO[]>{
    return this.http.get<eventLocationDTO[]>(this.apiURL);
  }

  post(eventLocation: newEventLocationDTO){
    return this.http.post(this.apiURL, eventLocation);
  }
}
