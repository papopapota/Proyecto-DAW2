package com.proyecto_daw2.cinemoon.Model;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "Sala")
public class Sala {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_sala")
    private int idSala ;
    @Column(name = "descripcion_sala")
    private String descripcionSala ;
    private double precio ;
}

