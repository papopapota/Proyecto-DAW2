import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeliculasCrudAdminComponent } from './peliculas-crud-admin/peliculas-crud-admin.component';
import { BoletoCompraComponent } from './boleto-compra/boleto-compra.component';
const routes: Routes = [ 
  {path: '', component: PeliculasCrudAdminComponent},
  {path: 'CompraBoleto', component: BoletoCompraComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule] 
})
export class AppRoutingModule { }
