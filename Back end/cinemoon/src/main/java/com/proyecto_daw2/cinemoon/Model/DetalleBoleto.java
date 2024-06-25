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
@Table(name = "detalle_boleto")
@Data
public class DetalleBoleto {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id_detalle;

    private int id_boleto;
    private int id_asiento;


     @ManyToOne
     @JoinColumn(name = "id_asiento", insertable = false, updatable = false)
     private Asiento objAsiento;
     
     
     @ManyToOne
     @JoinColumn(name = "id_boleto", insertable = false, updatable = false)
     private Boleto objBoleto;

}
