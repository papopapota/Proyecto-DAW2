import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {
  private urlBase = 'http://localhost:8080/api/usuario/obtenerUsuario';
  constructor(private http : HttpClient) { }

  public obtenerUsuario(): any{
    return this.http.get<any>(this.urlBase);
  }
  public obtenerUsuarioPorId(): any{
    return this.http.get<any>(this.urlBase);
  }
  private userSubject = new BehaviorSubject<any>(null);
  idtipousuario = this.userSubject.asObservable();
}
