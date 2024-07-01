import { Component, ElementRef, Renderer2 } from '@angular/core';
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
              private router : Router,
              private renderer: Renderer2,
              private el: ElementRef) {}

  productos : Producto[] = [];

  ngOnInit(): void {
    this.listarPeliculas();
  }

  listarPeliculas(){
    this.productoService.listar().subscribe(data => {
      this.productos = data;
    })
  }
  agregarFila(producto: any) {
    const tbody = this.el.nativeElement.querySelector('#detalleTable tbody');
    const newRow = this.renderer.createElement('tr');
    
    const cellIndex = this.renderer.createElement('td');
    const cellProducto = this.renderer.createElement('td');
    const cellCantidad = this.renderer.createElement('td');
    const cellTotal = this.renderer.createElement('td');

    const rowCount = tbody.rows.length;

    this.renderer.appendChild(cellIndex, this.renderer.createText((rowCount + 1).toString()));
    this.renderer.appendChild(cellProducto, this.renderer.createText(producto.nombre));

    const cantidadInput = this.renderer.createElement('input');
    this.renderer.setAttribute(cantidadInput, 'type', 'number');
    this.renderer.setAttribute(cantidadInput, 'min', '1');
    this.renderer.setAttribute(cantidadInput, 'value', '1');
    this.renderer.setAttribute(cantidadInput, 'class', 'form-control');
    this.renderer.listen(cantidadInput, 'change', () => this.actualizarTotal(cantidadInput, producto.precio, cellTotal));
    this.renderer.appendChild(cellCantidad, cantidadInput);

    this.renderer.appendChild(cellTotal, this.renderer.createText((producto.precio).toFixed(2)));

    this.renderer.appendChild(newRow, cellIndex);
    this.renderer.appendChild(newRow, cellProducto);
    this.renderer.appendChild(newRow, cellCantidad);
    this.renderer.appendChild(newRow, cellTotal);

    this.renderer.appendChild(tbody, newRow);

    //this.actualizarTotalGeneral();
  }

  actualizarTotal(element : HTMLInputElement, precio : number, cellTotal : HTMLElement) {
    const cantidad = parseFloat(element.value);
    const total = (cantidad * precio).toFixed(2);
    cellTotal.textContent = total;

    this.actualizarTotalGeneral();
  }

  actualizarTotalGeneral() {
    const tbody = this.el.nativeElement.querySelector('#detalleTable tbody');
    const rows = tbody.getElementsByTagName('tr');
    let totalGeneral = 0;

    for (let i = 0; i < rows.length; i++) {
      const total = parseFloat(rows[i].getElementsByTagName('td')[3].textContent);
      totalGeneral += total;
    }

    const totalGeneralElement = this.el.nativeElement.querySelector('#totalGeneral');
    totalGeneralElement.textContent = totalGeneral.toFixed(2);
  }

}

