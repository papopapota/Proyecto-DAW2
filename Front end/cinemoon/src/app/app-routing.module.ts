import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeliculasCrudAdminComponent } from './peliculas-crud-admin/peliculas-crud-admin.component';
import { BoletoCompraComponent } from './boleto-compra/boleto-compra.component';
import { UsuariosListaAdminComponent } from './usuarios-lista-admin/usuarios-lista-admin.component';
import { NavComponent } from './nav/nav.component';
import { UsuariosRegistroUsuarioComponent } from './usuarios-registro-usuario/usuarios-registro-usuario.component';
import { UsuariosActualizarUsuarioComponent } from './usuarios-actualizar-usuario/usuarios-actualizar-usuario.component';
import { UsuariosDetalleAdminComponent } from './usuarios-detalle-admin/usuarios-detalle-admin.component';
const routes: Routes = [ 
  {path: '', component: UsuariosListaAdminComponent},
  {path: 'CompraBoleto', component: BoletoCompraComponent},
  {path: 'ListaUsuarios', component: UsuariosListaAdminComponent},
  {path: 'ListaPeliculas', component: PeliculasCrudAdminComponent},
  {path: 'RegistroUsuario', component: UsuariosRegistroUsuarioComponent},
  {path: 'ActualizarUsuario', component: UsuariosActualizarUsuarioComponent},
  {path: 'DetalleUsuario/:idusuario', component: UsuariosDetalleAdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule] 
})
export class AppRoutingModule { }
