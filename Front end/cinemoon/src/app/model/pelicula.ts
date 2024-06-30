import { Genero } from "./genero";

export interface Pelicula {
    idpelicula: number;
    titulo: string;
    descripcion: string;
    imagen: string;
    idGenero: number;
    duracion:string;
    idioma:string;
    enestreno:boolean;


    genero ?: Genero;
}
