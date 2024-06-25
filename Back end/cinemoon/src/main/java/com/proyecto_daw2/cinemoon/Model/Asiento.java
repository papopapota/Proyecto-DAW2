package com.proyecto_daw2.cinemoon.Model;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "asiento")
public class Asiento {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_asiento")
    private int idAsiento ;
    private String codigo ;
    @Column(name = "id_funcion")
    private int idFuncion;
    
    @ManyToOne // Cambiar a ManyToOne ya que muchas películas pueden pertenecer a un género
    @JoinColumn(name = "id_funcion" , insertable = false , updatable = false)
    private Funcion funcion ;
    private boolean estadoAsiento ;
}
