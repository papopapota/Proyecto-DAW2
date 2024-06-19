import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Genero } from '../model/genero';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeneroService {
  private urlBase = 'http://localhost:8080/api/Genero';
  constructor(private http : HttpClient) { }

  public listar():Observable<Genero[]>{
    return this.http.get<Genero[]>(this.urlBase + "/lista");
  }
}
