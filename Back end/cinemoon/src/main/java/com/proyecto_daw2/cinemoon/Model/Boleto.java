package com.proyecto_daw2.cinemoon.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name = "Boleto")
@Data
public class Boleto {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id_boleto;
    private int id_funcion;

    @ManyToOne
    @JoinColumn(name = "id_usuario")
    private Usuario usuario;
    
    private int cantidad;
    private double Total;

    // @ManyToOne
    // @JoinColumn(name = "id_funcion", insertable = false, updatable = false)
    // private Funcion objFuncion;
}
