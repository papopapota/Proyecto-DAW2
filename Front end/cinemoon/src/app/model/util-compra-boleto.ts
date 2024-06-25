import { Asiento } from "./asiento";
import { Funcion } from "./funcion";

export interface UtilCompraBoleto {
    nombresApellidos: string;
    lstFuncion: Funcion[];
    lstAsiento: Asiento[];
    precioSala:number;
}
