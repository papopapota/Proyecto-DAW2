import { Component } from '@angular/core';
import { UsuarioService } from '../service/usuario.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from '../model/usuario';

@Component({
  selector: 'app-usuarios-detalle-admin',
  templateUrl: './usuarios-detalle-admin.component.html',
  styleUrl: './usuarios-detalle-admin.component.css'
})
export class UsuariosDetalleAdminComponent {

  constructor(private usuarioService: UsuarioService, private router: Router,
    private route: ActivatedRoute) { }

  usuario: Usuario = {
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

  ngOnInit() {
    this.obtenerUsuario();
  }

  obtenerUsuario() {
    const id = this.route.snapshot.params['idusuario'];
    this.usuarioService.buscar(id).subscribe(
      response => { this.usuario = response},
      error => { console.error("Error al obtener usuario", error);
      }
    );
  }

}
