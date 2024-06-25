import { TipoUsuario } from "./tipo-usuario";

export interface Usuario {

    idusuario: number;
    nombre_usuario: string;
    apellido_usuario: string;
    correo: string;
    clave: string;
    dni: string;
    id_tipo_usuario: number;

    //objTipoUsuario ?: TipoUsuario;
    objTipoUsuario ?: TipoUsuario

}
