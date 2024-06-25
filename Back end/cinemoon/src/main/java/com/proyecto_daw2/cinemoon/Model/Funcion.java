package com.proyecto_daw2.cinemoon.Model;

import jakarta.persistence.*;
import lombok.Data;

import java.sql.Date;
import java.sql.Time;
import java.text.SimpleDateFormat;

import org.apache.el.parser.AstFalse;

@Data
@Entity
@Table(name = "Funcion")
public class Funcion {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_funcion")
    private int idFuncion;
    @Column(name = "id_pelicula")
    private int idPelicula;
    @Column(name = "id_sala")
    private int idSala;

    private Date fechaFuncion ;
    private Time horaInicio ;
    private Time horaFin ;
    
    
    
    @ManyToOne // Cambiar a ManyToOne ya que muchas películas pueden pertenecer a un género
    @JoinColumn(name = "id_sala" , insertable = false , updatable = false )
    private Sala sala;
    
    @ManyToOne // Cambiar a ManyToOne ya que muchas películas pueden pertenecer a un género
    @JoinColumn(name = "id_pelicula" , insertable = false , updatable = false)
    private Pelicula pelicula;
    
    
    

    public String getFechaFuncionFormateada() {
        // Define el formato que deseas para la fecha
        SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy ");

        // Formatea la fecha en el formato deseado
        return sdf.format(fechaFuncion);
    }
}
