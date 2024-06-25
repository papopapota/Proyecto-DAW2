import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PeliculasCrudAdminComponent } from './peliculas-crud-admin/peliculas-crud-admin.component';
import { Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BoletoCompraComponent } from './boleto-compra/boleto-compra.component';
import { UsuariosListaAdminComponent } from './usuarios-lista-admin/usuarios-lista-admin.component';
import { UsuariosRegistroUsuarioComponent } from './usuarios-registro-usuario/usuarios-registro-usuario.component';
import { UsuariosActualizarUsuarioComponent } from './usuarios-actualizar-usuario/usuarios-actualizar-usuario.component';
import { UsuariosDetalleAdminComponent } from './usuarios-detalle-admin/usuarios-detalle-admin.component';
import { BoletosListaUsuarioComponent } from './boletos-lista-usuario/boletos-lista-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    PeliculasCrudAdminComponent,
    BoletoCompraComponent,
    UsuariosListaAdminComponent,
    UsuariosRegistroUsuarioComponent,
    UsuariosActualizarUsuarioComponent,
    UsuariosDetalleAdminComponent,
    BoletosListaUsuarioComponent
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
