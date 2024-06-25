import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeliculasCrudAdminComponent } from './peliculas-crud-admin/peliculas-crud-admin.component';
import { LoginComponent } from './login/login.component';
import { PeliculasListarUsuarioComponent } from './peliculas-listar-usuario/peliculas-listar-usuario.component';

const routes: Routes = [ 
  {path: 'peliculasCRUD', component: PeliculasCrudAdminComponent},
  {path: 'login', component: LoginComponent},
  {path: 'peliculas', component: PeliculasListarUsuarioComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
