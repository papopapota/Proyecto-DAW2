import { Time } from "@angular/common";

export interface Funcion {
    idFuncion:number;
    idPelicula:number;
    idSala:number;
    fechaFuncion:Date;
    horaInicio:Time;
    horaFin:Time;
    fechaFuncionFormateada:string;
}
