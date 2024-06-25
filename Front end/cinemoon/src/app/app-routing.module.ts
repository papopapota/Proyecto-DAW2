import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeliculasCrudAdminComponent } from './peliculas-crud-admin/peliculas-crud-admin.component';
import { LoginComponent } from './login/login.component';
import { PeliculasListarUsuarioComponent } from './peliculas-listar-usuario/peliculas-listar-usuario.component';
import { BoletoCompraComponent } from './boleto-compra/boleto-compra.component';

const routes: Routes = [ 
  {path: 'peliculasCRUD', component: PeliculasCrudAdminComponent},
  {path: 'login', component: LoginComponent},
  {path: 'peliculas', component: PeliculasListarUsuarioComponent},
  {path: 'CompraBoleto', component: BoletoCompraComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule] 
})
export class AppRoutingModule { }
