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

    public buscar(id : number): Observable<Sala>{
      return this.http.get<Sala>(this.urlBase + "/buscar/" + id);
    } 

    public registrar(sala : Sala): Observable<any>{
      return this.http.post<Sala>(this.urlBase + "/guardar", sala);
    }

    public eliminar(id:number): Observable<any>{
      return this.http.delete<any>(this.urlBase + "/eliminar/" + id);
    }
  
  
}
