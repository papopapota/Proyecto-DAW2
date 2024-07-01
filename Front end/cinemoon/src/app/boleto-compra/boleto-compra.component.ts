import { Component ,ViewChild,ViewChildren, QueryList, ElementRef, AfterViewInit } from '@angular/core';
import { Asiento } from '../model/asiento';
import { AsientoService } from '../service/asiento.service';
import { AppModule } from '../app.module';
import { BoletoService } from '../service/boleto.service';
import { UtilCompraBoleto } from '../model/util-compra-boleto';
import { Funcion } from '../model/funcion';
import { Router } from '@angular/router';


@Component({
  selector: 'app-boleto-compra',
  templateUrl: './boleto-compra.component.html', 
  styleUrl: './boleto-compra.component.css' ,
  
})
export class BoletoCompraComponent {

  constructor(private asientoService: AsientoService ,
     private boletoService : BoletoService,
    private route : Router) {}

  public lstAsiento: Asiento[] = [];

  public utilCompraBoleto : UtilCompraBoleto = {} as UtilCompraBoleto;

  public lstFuncion: Funcion[] = [] ;

  public precioSala: number = 0;

  public nombreApellidos: string = "";

  public asientos: Asiento[] = [];

  @ViewChildren('asientoRef') asientosRef: QueryList<ElementRef> = new QueryList();

  @ViewChild('cantidadTextField') cantidadTextField: ElementRef | undefined;
  @ViewChild('totalTextField') totalTextField: ElementRef | undefined;
  @ViewChild('idFuncion') idFuncion: ElementRef | undefined;
  @ViewChild('butacasCodigo') butacasCodigo: ElementRef | undefined;

  
  ngOnInit(): void {
    this.boletoService.listarPorPelicula(1).subscribe( data =>{

      this.utilCompraBoleto = data ;
      console.log(this.utilCompraBoleto);
      if (this.utilCompraBoleto ) {
        this.lstAsiento = this.utilCompraBoleto.lstAsiento;
        this.lstFuncion = this.utilCompraBoleto.lstFuncion;
        this.precioSala = this.utilCompraBoleto.precioSala;
        this.nombreApellidos = this.utilCompraBoleto.nombresApellidos;
      }else{
        console.log("util compra esta vacio ");
      }

    
    }
  );

   
  }
  ngAfterViewInit() {
    
    this.asientosRef.changes.subscribe(() => {
      this.loadScripts();

    });
  }

  ngAfterContentInit() {

  }
    loadScripts() {
  
      const dynamicScripts = [
         'assets/js/buyTikect.js'
      ];
      for (let i = 0; i < dynamicScripts.length; i++) {
        const node = document.createElement('script');
        node.src = dynamicScripts[i];
        //node.type = 'application/javascript';
        node.async = false;
        document.getElementsByTagName('body')[0].appendChild(node);
      }
    }

  cargarScript() {  

    const script = document.createElement('script');
    script.src = './src/app/Assets/buyTikect.js';
    script.type = 'text/html';
    
    script.async = false;
    document.body.appendChild(script);
  }

  comprarBoleto() {
    console.log("comprar boleto");
    
    let cantidad = parseInt( this.cantidadTextField?.nativeElement.value); 
    let total = parseFloat( this.totalTextField?.nativeElement.value);
    let idFuncion =  parseInt(this.idFuncion?.nativeElement.value);
    let butacasCodigo =  this.butacasCodigo?.nativeElement.value;
    console.log(this.cantidadTextField?.nativeElement.value);
    this.boletoService.comprarBoleto( cantidad, total , idFuncion , butacasCodigo).subscribe(Response => {
      
      console.log(Response);
    });
    this.route.navigate(['/dulceria']);
  }
}
