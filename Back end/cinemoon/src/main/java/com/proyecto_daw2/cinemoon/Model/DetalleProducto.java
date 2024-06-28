package com.proyecto_daw2.cinemoon.Model;

import org.hibernate.annotations.ManyToAny;

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
@Table (name = "detalleproducto")
@Data
public class DetalleProducto {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	private int iddetalle;
	private int idproducto ;
	private int id_boleto ;
	private int cantidad ;
	private double total ;
	
	 
    @ManyToOne 
    @JoinColumn(name = "idproducto" , insertable = false , updatable = false )
    private Producto objProducto;
    
    @ManyToOne 
    @JoinColumn(name = "id_boleto" , insertable = false , updatable = false )
    private Boleto objBoleto;

}
