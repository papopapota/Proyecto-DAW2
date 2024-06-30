import { Component } from '@angular/core';
import { PeliculaService } from '../service/pelicula.service';
import { Router } from '@angular/router';
import { Pelicula } from '../model/pelicula';
import { Producto } from '../model/producto';
import { ProductoService } from '../service/producto.service';

@Component({
  selector: 'app-dulceria-compra',
  templateUrl: './dulceria-compra.component.html',
  styleUrl: './dulceria-compra.component.css'
})
export class DulceriaCompraComponent {
  constructor(private productoService : ProductoService,
              private router : Router) {}

  productos : Producto[] = [];

  ngOnInit(): void {
    this.listarPeliculas();
  }

  listarPeliculas(){
    this.productoService.listar().subscribe(data => {
      this.productos = data;
    })
  }
  

}
