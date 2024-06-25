import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../service/usuario.service';
import { Usuario } from '../model/usuario';

@Component({
  selector: 'app-usuarios-lista-admin',
  templateUrl: './usuarios-lista-admin.component.html',
  styleUrl: './usuarios-lista-admin.component.css'
})
export class UsuariosListaAdminComponent {

  constructor(private usuarioService: UsuarioService, private router: Router) { }

  public usuarios: Usuario[] = [];

  ngOnInit(): void {
    this.listarUsuarios();
  }

  listarUsuarios(){
    this.usuarioService.listar().subscribe(data =>{
      this.usuarios = data;
    })
  }

  detalleUsuario(idusuario: number) {
    this.router.navigate(['/DetalleUsuario', idusuario]);
  }

  eliminarUsuario(id: number){
    this.usuarioService.eliminar(id).subscribe(Response =>{
      console.log("Usuario eliminado " + Response);
      this.listarUsuarios();
    },
    error=>{
      console.error("Error al eliminar el usuario: " + error);
    }
    )
  }

}
