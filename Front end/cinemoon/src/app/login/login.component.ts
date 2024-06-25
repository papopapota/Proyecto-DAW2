import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../model/usuario';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private loginService:LoginService, private router: Router) { }
  username: string = '';
  password: string = '';
  successMessage: string = '';
  failMessage: string = '';
  public user: Usuario = {
    idusuario: 0,
    nombre_usuario: '',
    apellido_usuario: '',
    dni: '',
    correo: '',
    clave: '',
    id_tipo_usuario: 1,
}
login() {
  this.loginService.login(this.username, this.password).subscribe((data: Usuario ) => {
    if (data != null) {
      this.user = data;
      console.log(this.user);
      this.successMessage = 'Login correcto';
      if (this.user.id_tipo_usuario == 1) {
        this.router.navigate(['/peliculas']);
      } else {
        this.router.navigate(['/peliculasCRUD']);
      }
    } else {
      this.failMessage = 'Login incorrecto';
    }
  },
(error: string) => {
  console.log("Error al hacer login" + error);
});
}

}
