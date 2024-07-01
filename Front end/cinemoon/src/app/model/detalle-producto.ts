import { Boleto } from "./boleto";
import { Producto } from "./producto";

export interface DetalleProducto {
    iddetalle : number;
    idproducto : number;
    id_boleto : number;
    cantidad : number;
    total : number;
    objProducto : Producto;
    objBoleto : Boleto;
}
