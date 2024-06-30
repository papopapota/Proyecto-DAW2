import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
@Injectable({
  providedIn: 'root'
})
export class CustomCookieService {

  constructor( private cookieService:CookieService) { }

  setUserCookier(user:any){
    this.cookieService.set('user', JSON.stringify(user));
  }

  getUserCookie():any{
    const user = this.cookieService.get('user');
    return user ? JSON.parse(user) : null;
  }

  deleteCookie(){
    this.cookieService.delete('user');
  }
}
