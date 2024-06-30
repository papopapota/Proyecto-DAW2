import { Component } from '@angular/core';
import { PeliculaService } from '../service/pelicula.service';
import { Pelicula } from '../model/pelicula';
import { NavbarService } from '../service/navbar.service';
import { Usuario } from '../model/usuario';

@Component({
  selector: 'app-peliculas-listar-usuario',
  templateUrl: './peliculas-listar-usuario.component.html',
  styleUrl: './peliculas-listar-usuario.component.css'
})
export class PeliculasListarUsuarioComponent {

  constructor(private peliculaService:PeliculaService, private navbarService: NavbarService
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
    this.navbarService.obtenerUsuario();
  }
  listarPeliculas(){
    this.peliculaService.listar().subscribe(data =>{
      this.peliculas = data;
    })
  }
  obtenerUsuario() {
    this.navbarService.obtenerUsuario().subscribe((data: Usuario ) => {
      if (data != null) {
        this.user = data;
        console.log(this.user);
        console.log(this.user.id_tipo_usuario);
      }
    },
    (error: string) => {
      console.log("Error al obtener usuario" + error);
    });
  }
}
