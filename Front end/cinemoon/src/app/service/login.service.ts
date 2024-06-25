import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private urlBase = 'http://localhost:8080/api/login/loguear';
  constructor(private http : HttpClient) { }

  public login(username:string, password:string): any{
    const body = { username, password}
    return this.http.post<any>(this.urlBase + "/" + username + "/" + password, body);
  }
}
