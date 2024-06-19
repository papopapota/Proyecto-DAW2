import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeliculasCrudAdminComponent } from './peliculas-crud-admin/peliculas-crud-admin.component';

const routes: Routes = [ 
  {path: '', component: PeliculasCrudAdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
