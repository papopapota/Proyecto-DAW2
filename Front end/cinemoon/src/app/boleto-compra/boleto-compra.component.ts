import { Component ,ViewChildren, QueryList, ElementRef, AfterViewInit } from '@angular/core';
import { Asiento } from '../model/asiento';
import { AsientoService } from '../service/asiento.service';
import { AppModule } from '../app.module';


@Component({
  selector: 'app-boleto-compra',
  templateUrl: './boleto-compra.component.html', 
  styleUrl: './boleto-compra.component.css' ,
  
})
export class BoletoCompraComponent {

  constructor(private asientoService: AsientoService) {}

  public asientos: Asiento[] = [];

  @ViewChildren('asientoRef') asientosRef: QueryList<ElementRef> = new QueryList();


  ngOnInit(): void {
    this.asientoService.listarPorPelicula(1).subscribe( data =>{
      this.asientos = data
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
         'src/app/Assets/buyTikect.js'
      ];
      for (let i = 0; i < dynamicScripts.length; i++) {
        const node = document.createElement('script');
        node.src = dynamicScripts[i];
        node.type = 'text/javascript';
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
}
