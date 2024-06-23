package com.proyecto_daw2.cinemoon.Model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name = "Usuario")
@Data
public class Usuario {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id_usuario")
    private int idusuario;

    private String nombre_usuario;
    private String apellido_usuario;
    private String dni;
    private String correo_usuario;
    private String clave_usuario;
    private int id_tipo_usuario;

    @ManyToOne
    @JoinColumn(name = "id_tipo_usuario", updatable = false, insertable = false)
    private TipoUsuario objTipoUsuario;
}
