package com.proyecto_daw2.cinemoon.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name = "tipo_usuario")
@Data
public class TipoUsuario {
    @Id
    private int id_tipo_usuario;
    private String descripcion_tipo_usuario;
}
