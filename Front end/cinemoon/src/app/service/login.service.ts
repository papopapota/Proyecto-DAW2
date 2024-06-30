import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CustomCookieService } from './custom-cookie.service';
import { Usuario } from '../model/usuario';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private urlBase = 'http://localhost:8080/api/login/loguear';
  constructor(private http : HttpClient , private cookieService : CustomCookieService) { }

  public login(username:string, password:string): any{
    const body = { username, password}
    return this.http.post<any>(this.urlBase + "/" + username + "/" + password, body);
  }
}
