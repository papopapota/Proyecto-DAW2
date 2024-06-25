import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../model/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private urlBase = 'http://localhost:8080/api/usuario';

  constructor(private http: HttpClient) { }

  public listar(): Observable<Usuario[]>{
    return this.http.get<Usuario[]>(this.urlBase + "/lista");
  }

  public registrar(usuario: Usuario):Observable<any>{
    return this.http.post<Usuario>(this.urlBase + "/registrar", usuario);
  }

  public buscar(id: number): Observable<Usuario>{
    return this.http.get<Usuario>(this.urlBase + "/"+ id);
  }

  public eliminar(id: number): Observable<any>{
    return this.http.delete<any>(this.urlBase + "/eliminar/" + id);
  }
}
