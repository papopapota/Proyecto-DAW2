import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BoletoService {

  private urlBase = 'http://localhost:8080/api/boleto';
  constructor(private http : HttpClient) { }

  public listarPorPelicula(idPelicula:number):Observable<any>{
    return this.http.get<any>(this.urlBase + "/listarAsientosPorPelicula/" + idPelicula);
  }

  public comprarBoleto(cantidad:number , total:number , idFuncion :number , butacasCodigo :string):Observable<any>{
    const body = {cantidad , total , idFuncion , butacasCodigo};
    console.log(body);
    return this.http.post<any>(this.urlBase + "/comprarAction", body);

  }
}
