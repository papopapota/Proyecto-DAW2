import { Component } from '@angular/core';
import { PeliculaService } from '../service/pelicula.service';
import { Pelicula } from '../model/pelicula';

@Component({
  selector: 'app-peliculas-listar-usuario',
  templateUrl: './peliculas-listar-usuario.component.html',
  styleUrl: './peliculas-listar-usuario.component.css'
})
export class PeliculasListarUsuarioComponent {

  constructor(private peliculaService:PeliculaService
) { }

  public peliculas: Pelicula[] = [];
  idtipoUsuario: number = 1;
  ngOnInit(): void {
    this.listarPeliculas();
    
  }
  listarPeliculas(){
    this.peliculaService.listar().subscribe(data =>{
      this.peliculas = data;
    })
  }
}
