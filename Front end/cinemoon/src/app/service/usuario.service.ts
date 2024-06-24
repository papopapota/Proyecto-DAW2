import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../model/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private baseUrl = 'http://localhost:8080/api/usuario';

  constructor(private http: HttpClient) { }

  public listar(): Observable<Usuario[]>{
    return this.http.get<Usuario[]>(this.baseUrl + "/lista");
  }

  public registrar(usuario: Usuario): Observable<any>{
    return this.http.post<Usuario>(this.baseUrl + "/registrar", usuario);
  }
}
