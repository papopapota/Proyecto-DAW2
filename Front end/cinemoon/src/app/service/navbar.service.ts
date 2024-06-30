import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Usuario } from '../model/usuario';
import { CustomCookieService } from './custom-cookie.service';
@Injectable({
  providedIn: 'root'
})
export class NavbarService {
  private urlBase = 'http://localhost:8080/api/usuario/obtenerUsuario';
  private userSubject = new BehaviorSubject<any>(null);
  idtipousuario = this.userSubject.asObservable();

  constructor(private http : HttpClient , private cookieService : CustomCookieService) { }

  public obtenerUsuario(): any{
    //return this.http.get<any>(this.urlBase );
    return this.cookieService.getUserCookie();
  }

  public EliminarUsuario(): any{
    //return this.http.get<any>(this.urlBase );
    return this.cookieService.deleteCookie();
  }

  public obtenerUsuarioPorId(): any{
    return this.http.get<any>(this.urlBase);
  }

  public loadIdtipousuario(){
    let usuario:Usuario;
    usuario = this.cookieService.getUserCookie();
    this.userSubject.next(usuario);

  }


}
