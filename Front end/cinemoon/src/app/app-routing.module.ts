import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeliculasCrudAdminComponent } from './peliculas-crud-admin/peliculas-crud-admin.component';
import { LoginComponent } from './login/login.component';
import { PeliculasListarUsuarioComponent } from './peliculas-listar-usuario/peliculas-listar-usuario.component';
import { BoletoCompraComponent } from './boleto-compra/boleto-compra.component';
import { UsuariosListaAdminComponent } from './usuarios-lista-admin/usuarios-lista-admin.component';
import { UsuariosRegistroUsuarioComponent } from './usuarios-registro-usuario/usuarios-registro-usuario.component';
import { UsuariosActualizarUsuarioComponent } from './usuarios-actualizar-usuario/usuarios-actualizar-usuario.component';
import { UsuariosDetalleAdminComponent } from './usuarios-detalle-admin/usuarios-detalle-admin.component';
import { BoletosListaUsuarioComponent } from './boletos-lista-usuario/boletos-lista-usuario.component';
const routes: Routes = [ 
  {path: 'CompraBoleto', component: BoletoCompraComponent},
  {path: 'ListaUsuarios', component: UsuariosListaAdminComponent},
  {path: 'RegistroUsuario', component: UsuariosRegistroUsuarioComponent},
  {path: 'ActualizarUsuario', component: UsuariosActualizarUsuarioComponent},
  {path: 'DetalleUsuario/:idusuario', component: UsuariosDetalleAdminComponent},
  {path: 'ListaBoletos', component: BoletosListaUsuarioComponent},
  {path: 'peliculasCRUD', component: PeliculasCrudAdminComponent},
  {path: 'login', component: LoginComponent},
  {path: 'peliculas', component: PeliculasListarUsuarioComponent},
  {path: 'CompraBoleto', component: BoletoCompraComponent},
  {path: '', redirectTo: '/RegistroUsuario', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule] 
})
export class AppRoutingModule { }
