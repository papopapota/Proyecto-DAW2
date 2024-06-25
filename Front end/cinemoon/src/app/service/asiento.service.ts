import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AsientoService {

  private urlBase = 'http://localhost:8080/api/Asiento';
  constructor(private http : HttpClient) { }

  public listarPorPelicula(idPelicula:number):Observable<any>{
    return this.http.get<any>(this.urlBase + "/listarAsientosPorPelicula/" + idPelicula);
  }
}
