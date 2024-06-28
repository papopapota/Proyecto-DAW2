import { Time } from "@angular/common";
import { Pelicula } from "./pelicula";

export interface Funcion {
    idFuncion:number;
    idPelicula:number;
    idSala:number;
    fechaFuncion:Date;
    horaInicio:Time;
    horaFin:Time;
    fechaFuncionFormateada:string;

    objPelicula: Pelicula;
}
