import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BoletoService {

  private urlBase = 'http://localhost:8080/api/boleto';
  constructor(private http : HttpClient) { }

  //pulbic listar
}
