import { Component } from '@angular/core';
import { PeliculaService } from '../service/pelicula.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Pelicula } from '../model/pelicula';
import { FuncionesService } from '../service/funciones.service';
import { Funcion } from '../model/funcion';

@Component({
  selector: 'app-pelicula-detalle',
  templateUrl: './pelicula-detalle.component.html',
  styleUrl: './pelicula-detalle.component.css'
})
export class PeliculaDetalleComponent {

  constructor(private peliculaService: PeliculaService, private funcionesService: FuncionesService, private router: Router, private route: ActivatedRoute) { }

  public funciones: Funcion[] = [];
  public peli : Pelicula = {
    idpelicula: 0,
    titulo:  "",
    descripcion:"",  
    imagen:  "",
    idGenero: 0,
    duracion: "",
    idioma: "",
    enestreno: true
  };
  ngOnInit(): void {
    this.obtenerPelicula();
    this.listarFunciones();
  } 

  obtenerPelicula() {
    const id = this.route.snapshot.params['idpelicula'];
    this.peliculaService.buscar(id).subscribe(
      response => { this.peli = response},
      error => { console.error("Error al obtener pelicula", error);
      }
    );
  }

  listarFunciones(){
    this.funcionesService.listar().subscribe(data =>{
      this.funciones = data;
    })
  } 
}
