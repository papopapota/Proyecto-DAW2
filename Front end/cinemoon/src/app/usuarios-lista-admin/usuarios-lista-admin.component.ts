import { Component } from '@angular/core';
import { Usuario } from '../model/usuario';
import { UsuarioService } from '../service/usuario.service';

@Component({
  selector: 'app-usuarios-lista-admin',
  templateUrl: './usuarios-lista-admin.component.html',
  styleUrl: './usuarios-lista-admin.component.css'
})
export class UsuariosListaAdminComponent {
  
  usuarios: Usuario[] = [];

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.usuarioService.listar().subscribe(data => {
      this.usuarios = data;
    }
    );
  }
}
