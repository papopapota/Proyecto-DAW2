import { Time } from "@angular/common";
import { Pelicula } from "./pelicula";
import { Sala } from "./sala";

export interface Funcion {
    idFuncion:number;
    idPelicula:number;
    idSala:number;
    fechaFuncion: string;
    horaInicio: string;
    horaFin:string;
    fechaFuncionFormateada ?:string;

    sala ? : Sala;
    pelicula?: Pelicula;
}
