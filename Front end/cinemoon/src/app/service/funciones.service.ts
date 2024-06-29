import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Funcion } from '../model/funcion';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FuncionesService {

  private urlBase = 'http://localhost:8080/api/funcion';


  constructor(private http:HttpClient) { }

    public listar(): Observable<Funcion[]>{
      return this.http.get<Funcion[]>(this.urlBase + "/lista");
    }

    public registrar(funcion : Funcion): Observable<any>{
      return this.http.post<Funcion>(this.urlBase + "/guardar", funcion);
    }

    public buscar (id : number): Observable<Funcion>{
      return this.http.get<Funcion>(this.urlBase + "/buscar/" + id);
    }

    public eliminar(id:number): Observable<any>{
      return this.http.delete<any>(this.urlBase + "/eliminar/" + id);
    }

}
