import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Sala } from '../model/sala';

@Injectable({
  providedIn: 'root'
})
export class SalaService {
  private urlBase = 'http://localhost:8080/api/sala';

  

  constructor(private http:HttpClient) { }

    public listar(): Observable<Sala[]>{
      return this.http.get<Sala[]>(this.urlBase + "/lista");
    }
}
