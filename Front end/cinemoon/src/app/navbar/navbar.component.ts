import { ChangeDetectorRef, Component } from '@angular/core';
import { NavbarService } from '../service/navbar.service';
import { Router } from '@angular/router';
import { Usuario } from '../model/usuario';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
constructor(private navbarService:NavbarService, private cdr: ChangeDetectorRef) { }
ngOnInit(): void {
  this.obtenerUsuario();

  let usuario: Usuario = this.navbarService.obtenerUsuario();
  this.idtipousuario = usuario.id_tipo_usuario;
}
  idtipousuario: number = this.navbarService.obtenerUsuario();
  obtenerUsuario() {
    /*this.navbarService.obtenerUsuario().subscribe((data: Usuario ) => {
      if (data != null) {
        this.idtipousuario = data.id_tipo_usuario;
        console.log(this.idtipousuario);
        this.cdr.detectChanges();
      }
    },
    (error: string) => {
      console.log("Error al obtener usuario" + error);
    });*/
      this.navbarService.loadIdtipousuario();
      console.log(this.idtipousuario);
  }
  obtenerUsuarioPorId() {
    this.navbarService.idtipousuario.subscribe((data: number ) => {
      this.idtipousuario = data;
    });
    //his.navbarService.obtenerUsuarioPorId().subscribe((data: number ) => {
    // if (data != null) {
    //   /**/ 
    // }
    //,
    //error: string) => {
    // console.log("Error al obtener usuario" + error);
    //);
  } 
}
