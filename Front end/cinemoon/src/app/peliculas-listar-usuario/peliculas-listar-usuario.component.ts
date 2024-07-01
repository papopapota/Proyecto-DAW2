import { Component } from '@angular/core';
import { PeliculaService } from '../service/pelicula.service';
import { Pelicula } from '../model/pelicula';
import { NavbarService } from '../service/navbar.service';
import { Usuario } from '../model/usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-peliculas-listar-usuario',
  templateUrl: './peliculas-listar-usuario.component.html',
  styleUrl: './peliculas-listar-usuario.component.css'
})
export class PeliculasListarUsuarioComponent {

  constructor(private peliculaService:PeliculaService, private navbarService: NavbarService, private router: Router
) { }
  public user: Usuario = {
  idusuario: 0,
  nombre_usuario: "",
  apellido_usuario: "",
  dni: "",
  correo: "",
  clave: "",
  id_tipo_usuario: 2,
  objTipoUsuario: {
    id_tipo_usuario: 1,
    descripcion_tipo_usuario: "Cliente"
  }
};

  public peliculas: Pelicula[] = [];
  ngOnInit(): void {
    this.listarPeliculas();
    this.obtenerUsuario();
    //this.navbarService.obtenerUsuario();
  }
  listarPeliculas(){
    this.peliculaService.listar().subscribe(data =>{
      this.peliculas = data;
    })
  }
  obtenerUsuario() {
    this.navbarService.loadIdtipousuario();
  }
  detallePelicula(idpelicula: number) {
    this.router.navigate(['/DetallePelicula', idpelicula]);
  }
}
