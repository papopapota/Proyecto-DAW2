import { Component } from '@angular/core';
import { FuncionesService } from '../service/funciones.service';
import { Funcion } from '../model/funcion';
import { PeliculaService } from '../service/pelicula.service';
import { SalaService } from '../service/sala.service';
import { Sala } from '../model/sala';
import { Pelicula } from '../model/pelicula';
import { Router } from '@angular/router';

@Component({
  selector: 'app-funciones-crud-admin',
  templateUrl: './funciones-crud-admin.component.html',
  styleUrl: './funciones-crud-admin.component.css'
})
export class FuncionesCrudAdminComponent {

  //Constructor der servicios
  constructor(private funcionesService: FuncionesService,
    private peliculaService: PeliculaService,
    private salaService: SalaService,
    private router: Router) { }

  mensaje = "";
  //Objeto vacio para almacenar registro
  nuevafuncion: Funcion = {
    idFuncion: 0,
    idPelicula: 0,
    idSala: 0,
    fechaFuncion: "",
    horaInicio: "",
    horaFin: ""
  };

  //Objeto de Listado
  funciones: Funcion[] = [];
  salas: Sala[] = [];
  peliculas: Pelicula[] = [];


  //Eventos
  ngOnInit(): void {

    this.listarFunciones();

    this.salaService.listar().subscribe(data => {
      this.salas = data
    });

    this.peliculaService.listar().subscribe(data => {
      this.peliculas = data
    });
  }

  listarFunciones() {
    this.funcionesService.listar().subscribe(data => {
      this.funciones = data
    });
  }

  buscarFunciones(id: number) {
    this.funcionesService.buscar(id).subscribe(data => {
      this.nuevafuncion = data;
    })
  }

  eliminarFunciones(id: number) {
    this.funcionesService.eliminar(id).subscribe(Response => {
        console.log("Funcion eliminada " + Response);
        this.listarFunciones();
        this.router.navigate(['mantenimientoFunciones']);
        this.mensaje = "Funcion Eliminada con exito";
      },
      error => {
        console.error("Error al eliminar la Funcion: " + error);
      }
    )
  }

  registrarFunciones() {
    this.funcionesService.registrar(this.nuevafuncion).subscribe(
      //respuesta al registrar
      Response => {
        console.log("Funcion registrada " + Response);
        this.nuevafuncion = {
          //Limpiar campos
          idFuncion: 0,
          idPelicula: 0,
          idSala: 0,
          fechaFuncion: "",
          horaInicio: "",
          horaFin: ""
        }
        //
        this.router.navigate(['mantenimientoFunciones']);
        this.listarFunciones();
        this.mensaje = "Funcion registrada con exito";
        console.log(this.mensaje);
        setTimeout(() => {
          this.mensaje = ""; 
        }, 3000); 
      },
      //en caso de error
      error => {
        console.log("Error al registrar la funcion: " + error);
        console.log(this.nuevafuncion);
      }
    )
  }

  limpiarCampos(){
    this.nuevafuncion ={
     //Limpiar campos
     idFuncion: 0,
     idPelicula: 0,
     idSala: 0,
     fechaFuncion: "",
     horaInicio: "",
     horaFin: ""
    }
    this.listarFunciones;
    this.router.navigate(['mantenimientoFunciones']);
  }
}
