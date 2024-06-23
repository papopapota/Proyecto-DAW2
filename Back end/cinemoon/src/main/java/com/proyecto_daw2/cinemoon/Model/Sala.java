package com.proyecto_daw2.cinemoon.Model;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "Sala")
public class Sala {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idSala ;
    private String descripcionSala ;
    private double precio ;
}

