import { Funcion } from "./funcion";
import { Usuario } from "./usuario";

export interface Boleto {
    id_boleto: number;
    id_funcion: number;
    id_usuario: number;
    cantidad: number;
    Total: number;

    funcion: Funcion;
    objUsuario: Usuario;
}
