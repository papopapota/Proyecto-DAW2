import { ChangeDetectorRef, Component } from '@angular/core';
import { ProductoService } from '../service/producto.service';
import { Router } from '@angular/router';
import { Producto } from '../model/producto';

@Component({
  selector: 'app-producto-crud-admin',
  templateUrl: './producto-crud-admin.component.html',
  styleUrl: './producto-crud-admin.component.css'
})
export class ProductoCrudAdminComponent {
  constructor(private productoServices:ProductoService,
    private router: Router,
    private cdRef : ChangeDetectorRef
  ) { }

  mensaje = "";
  newProducto:Producto = {
    idproducto: 0,
    nombre: "",
    descripcion: "",
    precio: 0
  };

  lstProductos: Producto[] = [];


  ngOnInit(): void {
    this.listarPeliculas();


  }

  registrarPelicula(){
    this.productoServices.registrar(this.newProducto).subscribe(Response =>{
      console.log("Producto registrada " + Response);
      this.newProducto = {
        idproducto: 0,
        nombre: "",
        descripcion: "",
        precio: 0
      };
      this.router.navigate(['productosCRUD']);
      this.listarPeliculas();
      this.mensaje = "Producto registrado con exito";

      setTimeout(() => {
        this.mensaje = ""; 
      }, 3000); 
  
    },
    error =>{
      console.log("Error al registrar el producto: " +error);
      console.log(this.newProducto);
    })
  }

  buscarPelicula(id:number){
    this.productoServices.buscar(id).subscribe(data =>{
      this.newProducto = data;
      this.cdRef.detectChanges();
    })
  }

  listarPeliculas(){
    this.productoServices.listar().subscribe(data =>{
      this.lstProductos = data;
    })
  }

  eliminarPelicula(id:number){
    this.productoServices.eliminar(id).subscribe(Response =>{
      console.log("Producto eliminada " + Response);
      this.listarPeliculas();
      this.router.navigate(['productosCRUD']);
      this.mensaje = "Producto Eliminado con exito";

    },
    error=>{
      console.error("Error al eliminar el producto: " + error);
    }
    )
  }

}
