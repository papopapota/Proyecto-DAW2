import { Component } from '@angular/core';
import { BoletoService } from '../service/boleto.service';
import { Router } from '@angular/router';
import { Boleto } from '../model/boleto';

@Component({
  selector: 'app-boletos-lista-usuario',
  templateUrl: './boletos-lista-usuario.component.html',
  styleUrl: './boletos-lista-usuario.component.css'
})
export class BoletosListaUsuarioComponent {

  constructor(private boletoService: BoletoService, private router: Router) { }

  public boletos: Boleto[] = [];

  ngOnInit(): void {
    this.listarBoletos();
    console.log(this.boletos);
  }

  listarBoletos(){
    this.boletoService.listar().subscribe(data =>{
      this.boletos = data;
    })
  }
}
