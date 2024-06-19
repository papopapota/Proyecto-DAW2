import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pelicula } from '../model/pelicula';

@Injectable({
  providedIn: 'root'
})
export class PeliculaService {
  private urlBase = 'http://localhost:8080/api/pelicula';
  constructor(private http : HttpClient) { }

  public listar():Observable<Pelicula[]>{
    return this.http.get<Pelicula[]>(this.urlBase + "/lista");
  }

  public registrar(pelicula:Pelicula):Observable<any>{
    return this.http.post<Pelicula>(this.urlBase + "/registrar", pelicula);
  }

  public buscar(id:number): Observable<any>{
    return this.http.get<any>(this.urlBase + "/actualizarProducto/" + id);
  }

}
