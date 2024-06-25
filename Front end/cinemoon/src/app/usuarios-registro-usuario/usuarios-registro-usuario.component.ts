import { Component } from '@angular/core';
import { UsuarioService } from '../service/usuario.service';
import { Router } from '@angular/router';
import { Usuario } from '../model/usuario';

@Component({
  selector: 'app-usuarios-registro-usuario',
  templateUrl: './usuarios-registro-usuario.component.html',
  styleUrl: './usuarios-registro-usuario.component.css'
})
export class UsuariosRegistroUsuarioComponent {

  constructor(private usuarioService: UsuarioService,
    private router: Router,
  ) { }

  public usuarios: Usuario[] = [];

  public newUsuario: Usuario = {
    idusuario: 0,
    nombre_usuario: "",
    apellido_usuario: "",
    dni: "",
    correo: "",
    clave: "",
    id_tipo_usuario: 1,
    objTipoUsuario: {
      id_tipo_usuario: 1,
      descripcion_tipo_usuario: "Cliente"
    }
  };

  registrarUsuario() {
    this.usuarioService.registrar(this.newUsuario).subscribe(
      response => {
        console.log('Usuario registrado:', response);
        this.newUsuario = {
          idusuario: 0,
          nombre_usuario: "",
          apellido_usuario: "",
          dni: "",
          correo: "",
          clave: "",
          id_tipo_usuario: 1,
          objTipoUsuario: {
            id_tipo_usuario: 1,
            descripcion_tipo_usuario: "Cliente"}};
        this.router.navigate(['/ListaUsuarios']);
          },
          error => {
            console.log('Error al registrar usuario', error);
          }
    );
    }
}
