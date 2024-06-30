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

  public idusuario: number = 0;
  public boletos: Boleto[] = [];
  constructor(private router: Router, private boletoServise: BoletoService) {}

  ngOnInit(): void {
    this.loadUserAndTickets();
  }

  loadUserAndTickets(): void {
    const userJson = sessionStorage.getItem('user');
    if (userJson) {
      const user = JSON.parse(userJson);
      this.idusuario = user.idusuario;
      console.log("Id del usuario:", this.idusuario);

      this.boletoServise.getTicketsByUserId(user.idusuario).subscribe({
        next: (boletos) => {
          this.boletos = boletos;
          console.log("Boletos del usuario:", this.boletos);
        },
        error: (err) => {
          console.error("Error al obtener los boletos:", err);
        }
      });
    } else {
      console.log("No hay usuario logueado.");
      this.router.navigate(['/login']);
    }
  }

  
}
