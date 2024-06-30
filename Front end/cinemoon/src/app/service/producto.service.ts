import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../model/producto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private urlBase = 'http://localhost:8080/api/producto';
  constructor(private http : HttpClient) { }

  public listar():Observable<Producto[]>{
    return this.http.get<Producto[]>(this.urlBase + "/lista");
  }

  public registrar(producto:Producto):Observable<any>{
    return this.http.post<Producto>(this.urlBase + "/guardar", producto);
  }

  public buscar(id:number): Observable<any>{
    return this.http.get<any>(this.urlBase + "/buscar/" + id);
  }

  public eliminar(id:number): Observable<any>{
    return this.http.delete<any>(this.urlBase + "/eliminar/" + id);
  }
}
