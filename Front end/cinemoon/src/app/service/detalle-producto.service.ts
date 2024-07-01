import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DetalleProducto } from '../model/detalle-producto';

@Injectable({
  providedIn: 'root'
})
export class DetalleProductoService {

  private url ="http://localhost:8080/api/detalleproducto";

  constructor(private http : HttpClient) { }

  public listar():Observable<DetalleProducto[]>{
    return this.http.get<DetalleProducto[]>(this.url + "/lista");
  }

  public registrar(detalle : DetalleProducto):Observable<any>{
    return this.http.post<any>(this.url + "/guardar", detalle);
  }
}
