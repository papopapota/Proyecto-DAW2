import { TipoUsuario } from "./tipo-usuario";

export interface Usuario {

    idusuario: number;
    nombre_usuario: string;
    apellido_usuario: string;
    dni: string;
    correo: string;
    clave: string;
    id_tipo_usuario: number;

    objTipoUsuario: TipoUsuario;
}
