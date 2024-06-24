import { TipoUsuario } from "./tipo-usuario";

export interface Usuario {

    idusuario: number;
    nombre_usuario: string;
    apellido_usuario: string;
    dni: string;
    correo_usuario: string;
    clave_usuario: string;
    id_tipo_usuario: number;

    objTipoUsuario: TipoUsuario
}
