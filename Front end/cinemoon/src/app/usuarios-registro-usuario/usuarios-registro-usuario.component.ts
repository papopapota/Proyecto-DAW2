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
          };
        this.router.navigate(['/login']);
          },
          error => {
            console.log('Error al registrar usuario', error);
          }
    );
    }
}
