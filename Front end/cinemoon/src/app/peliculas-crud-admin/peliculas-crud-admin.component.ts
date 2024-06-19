import { Component } from '@angular/core';
import { Pelicula } from '../model/pelicula';
import { PeliculaService } from '../service/pelicula.service';
import { Router } from '@angular/router';
import { Genero } from '../model/genero';
import { GeneroService } from '../service/genero.service';

@Component({
  selector: 'app-peliculas-crud-admin',
  templateUrl: './peliculas-crud-admin.component.html',
  styleUrl: './peliculas-crud-admin.component.css'
})
export class PeliculasCrudAdminComponent {


  constructor(private peliculaService:PeliculaService,
    private router: Router,
    private generoService: GeneroService
  ) { }

  public peliculas: Pelicula[] = [];
  public listaGeneros:Genero[] = [];

  public newPelicula : Pelicula = {
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
    this.peliculaService.listar().subscribe(data =>{
      this.peliculas = data;
    })

    this.generoService.listar().subscribe(data =>{
      this.listaGeneros = data;
    })
  }

  registrarPelicula(){
    this.peliculaService.registrar(this.newPelicula).subscribe(Response =>{
      console.log("Pelicula registrada " + Response);
      this.newPelicula = {
        idpelicula: 0,
        titulo:  "",
        descripcion:"",  
        imagen:  "",
        idGenero: 0,
        duracion: "",
        idioma: "",
        enestreno: true
      };
      this.router.navigate(['']);
    },
    error =>{
      console.log("Error al registrar la pelicula: " +error);
      console.log(this.newPelicula);
    })
  }

}
