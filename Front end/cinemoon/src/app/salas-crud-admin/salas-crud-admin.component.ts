import { Component } from '@angular/core';
import { SalaService } from '../service/sala.service';
import { Router } from '@angular/router';
import { Sala } from '../model/sala';

@Component({
  selector: 'app-salas-crud-admin',
  templateUrl: './salas-crud-admin.component.html',
  styleUrl: './salas-crud-admin.component.css'
})
export class SalasCrudAdminComponent {

  //Constructor
  constructor(private salaService: SalaService,
    private router: Router
  ) { }
  //Objetos
  nuevaSala: Sala = {
    idSala: 0,
    descripcionSala: "",
    precio: 0
  };
  mensaje = "";
  salas: Sala[] = [];

  ngOnInit(){
    this.listarSala();
  }

  //Funciones
  listarSala() {
    this.salaService.listar().subscribe(data => {
      this.salas = data
    })
  }

  buscarSala(id: number) {
    this.salaService.buscar(id).subscribe(data => {
      this.nuevaSala = data
    })
  }

  registrarSala() {
    this.salaService.registrar(this.nuevaSala).subscribe(Response => {
      console.log("Sala Registrada");
      this.nuevaSala = {
        idSala: 0,
        descripcionSala: "",
        precio: 0
      }
      this.router.navigate(['mantenimientoSalas']);
      this.listarSala();
      this.mensaje = "Funcion registrada";
      setTimeout(() =>{
        this.mensaje = "";
      }, 3000);
    },
    error =>{
      console.log("Error al registrar la Funcion" + error)
    }
  )
  }

  eliminarSala(id:number){
    this.salaService.eliminar(id).subscribe(Response =>{
      console.log("Funcion eliminada" + Response);
      this.listarSala;
      this.router.navigate(['mantenimientoSalas']);
      this.mensaje = "Funcion eliminada";
    },
    error =>{
      console.error("Error al eliminar Funcion" + error);
    }
  
  )
  }
  limpiarCampos(){
    this.nuevaSala ={
      idSala: 0,
      descripcionSala: "",
      precio: 0
    }
    this.listarSala;
    this.router.navigate(['mantenimientoSalas']);
    console.log("dsfdds")
  }


}
