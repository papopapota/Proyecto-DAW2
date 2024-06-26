import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PeliculasCrudAdminComponent } from './peliculas-crud-admin/peliculas-crud-admin.component';
import { Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { LoginComponent } from './login/login.component';
import { PeliculasListarUsuarioComponent } from './peliculas-listar-usuario/peliculas-listar-usuario.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CarruselComponent } from './carrusel/carrusel.component';
import { BoletoCompraComponent } from './boleto-compra/boleto-compra.component';
import { UsuariosListaAdminComponent } from './usuarios-lista-admin/usuarios-lista-admin.component';
import { UsuariosRegistroUsuarioComponent } from './usuarios-registro-usuario/usuarios-registro-usuario.component';
import { UsuariosActualizarUsuarioComponent } from './usuarios-actualizar-usuario/usuarios-actualizar-usuario.component';
import { UsuariosDetalleAdminComponent } from './usuarios-detalle-admin/usuarios-detalle-admin.component';
import { BoletosListaUsuarioComponent } from './boletos-lista-usuario/boletos-lista-usuario.component';
import { FuncionesCrudAdminComponent } from './funciones-crud-admin/funciones-crud-admin.component';
import { SalasCrudAdminComponent } from './salas-crud-admin/salas-crud-admin.component';
import { ProductoCrudAdminComponent } from './producto-crud-admin/producto-crud-admin.component';
import { DulceriaCompraComponent } from './dulceria-compra/dulceria-compra.component';
import { DetalleDulceriaCompraComponent } from './detalle-dulceria-compra/detalle-dulceria-compra.component';
import { PeliculaDetalleComponent } from './pelicula-detalle/pelicula-detalle.component';



@NgModule({
  declarations: [
    AppComponent,
    PeliculasCrudAdminComponent,
    UsuariosListaAdminComponent,
    UsuariosRegistroUsuarioComponent,
    UsuariosActualizarUsuarioComponent,
    UsuariosDetalleAdminComponent,
    BoletosListaUsuarioComponent,
    LoginComponent,
    PeliculasListarUsuarioComponent,
    NavbarComponent,
    CarruselComponent,
    BoletoCompraComponent,
    FuncionesCrudAdminComponent,
    SalasCrudAdminComponent,
    ProductoCrudAdminComponent,
    DulceriaCompraComponent,
    DetalleDulceriaCompraComponent,
    PeliculaDetalleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
