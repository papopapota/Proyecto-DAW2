import { Component } from '@angular/core';
import { UsuarioService } from '../service/usuario.service';
import { Router } from '@angular/router';
import { Usuario } from '../model/usuario';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-usuarios-actualizar-usuario',
  templateUrl: './usuarios-actualizar-usuario.component.html',
  styleUrl: './usuarios-actualizar-usuario.component.css'
})
export class UsuariosActualizarUsuarioComponent {

  constructor(private router: Router, private usuarioService: UsuarioService) { }

  public user: Usuario = {
    idusuario: 0,
    nombre_usuario: '',
    apellido_usuario: '',
    dni: '',
    correo: '',
    clave: '',
    id_tipo_usuario: 1,
  }

  ngOnInit(): void {
    this.loadUser();
  }
  
  loadUser(): void {
    const userJson = sessionStorage.getItem('user');
    if (userJson) {
      this.user = JSON.parse(userJson);
      console.log("Usuario recuperado:", this.user);
    } else {
      console.log("No hay usuario logueado.");
    }
  }

  updateUsuario(form: NgForm): void {
    if (this.user) {
      this.usuarioService.updateUsuario(this.user).subscribe({
        next: (updatedUser) => {
          sessionStorage.setItem('user', JSON.stringify(updatedUser));
          console.log("Usuario modificado:", updatedUser);
          this.router.navigate(['/peliculas']);
        },
        error: (err) => {
          console.error("Error al actualizar el usuario:", err);
        }
      });
    } else {
      console.error("No se puede actualizar. No hay usuario logueado.");
    }
  }

}
